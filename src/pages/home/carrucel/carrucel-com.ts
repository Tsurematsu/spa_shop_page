import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import styles from "./carrucel.css?raw";

interface Slide {
  url: string;
  alt: string;
  title: string;
}

@customElement('carrucel-com')
export class CarrucelCom extends LitElement {
  @property({ type: Array })
  slides: Slide[] = [
    { url: 'https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1762781252530-4684319015-e4daca9eca0a921f8afc7cb1be3b6bde1762781253-1024-1024.webp?322508758', alt: 'Montañas', title: 'Paisaje de Montaña' },
    { url: 'https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1740947109727-626708523-2f2dcb037e4b1447c15f63de777bea501740947109-1024-1024.webp?322508758', alt: 'Playa', title: 'Playa Paradisíaca' },
    { url: 'https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1740168985102-5978827947-61fdf3d20bc46ad767449dcbe9607cf11740168988-1024-1024.webp?322508758', alt: 'Bosque', title: 'Bosque Natural' },
    { url: 'https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1742006777777-5309873935-68fd16e9fc11141c7afec5ab4c887c241742006779-1024-1024.webp?322508758', alt: 'Lago', title: 'Lago al Atardecer' },
    { url: 'https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1740168985103-8947526091-a3c5da63b9a2331c2edd78118d09f84e1740168990-1024-1024.webp?322508758', alt: 'Ciudad', title: 'Ciudad Moderna' }
  ];

  // Para el carrusel infinito necesitamos 1 slide extra al inicio y uno al final
  @state() private currentIndex = 1; 
  @state() private isAnimating = false;
  @state() private isDragging = false;
  @state() private startX = 0;
  @state() private dragOffset = 0;

  @property({ type: Number }) autoplayInterval = 5000;
  @property({ type: Boolean }) autoplay = true;

  @query('.carousel-slides') container!: HTMLElement;

  private autoplayTimer?: number;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.autoplay) this.startAutoplay();
    
    // Eventos globales para soltar el mouse fuera del componente
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopAutoplay();
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  private startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayTimer = window.setInterval(() => this.next(), this.autoplayInterval);
  }

  private stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
  }

  private next(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex++;
  }

  private prev(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex--;
  }

  // Manejo del efecto infinito al terminar la transición CSS
  private handleTransitionEnd(): void {
    this.isAnimating = false;
    
    // Si llegamos al clon del final (índice real + 1), saltamos al primero real sin animación
    if (this.currentIndex >= this.slides.length + 1) {
      this.currentIndex = 1;
    } 
    // Si llegamos al clon del principio (índice 0), saltamos al último real sin animación
    else if (this.currentIndex <= 0) {
      this.currentIndex = this.slides.length;
    }
  }

  private goToSlide(index: number): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = index + 1; // +1 por el slide clonado al inicio
    if (this.autoplay) this.startAutoplay();
  }

  // LÓGICA DE DRAG (ARRASTRAR)
  private handleMouseDown = (e: MouseEvent | TouchEvent) => {
    this.isDragging = true;
    this.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    this.dragOffset = 0;
    this.stopAutoplay();
  };

  private handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!this.isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    this.dragOffset = currentX - this.startX;
  };

  private handleMouseUp = () => {
    if (!this.isDragging) return;
    this.isDragging = false;

    const threshold = 100; // Píxeles mínimos para cambiar de slide
    if (this.dragOffset < -threshold) {
      this.next();
    } else if (this.dragOffset > threshold) {
      this.prev();
    }
    
    this.dragOffset = 0;
    if (this.autoplay) this.startAutoplay();
  };

  render(): TemplateResult {
    // Lista aumentada para el efecto infinito: [Último, ...Originales, Primero]
    const displaySlides = [
      this.slides[this.slides.length - 1],
      ...this.slides,
      this.slides[0]
    ];

    const containerWidth = this.container?.offsetWidth || 0;
    const dragTranslate = (this.dragOffset / containerWidth) * 100;
    const transformX = -(this.currentIndex * 100) + dragTranslate;

    return html`
      <div class="carousel" 
           @mousedown=${this.handleMouseDown}
           @touchstart=${this.handleMouseDown}
           @mouseenter=${this.stopAutoplay}
           @mouseleave=${() => this.autoplay && this.startAutoplay()}>
        
        <div class="carousel-container">
          <div class="carousel-slides ${this.isAnimating || !this.isDragging ? 'animate' : ''}" 
               style="transform: translateX(${transformX}%)"
               @transitionend=${this.handleTransitionEnd}>
            ${displaySlides.map((slide) => html`
              <div class="carousel-slide">
                <img src="${slide.url}" alt="${slide.alt}" draggable="false" />
                <div class="carousel-caption">
                  <h3>${slide.title}</h3>
                </div>
              </div>
            `)}
          </div>
        </div>

        <button class="carousel-button prev" @click=${this.prev} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button class="carousel-button next" @click=${this.next} aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div class="carousel-indicators">
          ${this.slides.map((_, index) => html`
            <button 
              class="indicator ${(this.currentIndex === index + 1) || 
                                (this.currentIndex === 0 && index === this.slides.length - 1) ||
                                (this.currentIndex === this.slides.length + 1 && index === 0) ? 'active' : ''}"
              @click=${() => this.goToSlide(index)}
              aria-label="Ir a slide ${index + 1}">
            </button>
          `)}
        </div>
      </div>
    `;
  }

  static styles = unsafeCSS(styles)
}