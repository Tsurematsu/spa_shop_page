import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

@customElement('generic-carousel-com')
export class GenericCarouselCom extends LitElement {
  
  @property({ type: Array }) items: any[] = [];

  // Cambio: Usamos un tipo más flexible para evitar el error de TemplateResult<1>
  // y aseguramos que la firma (item, index) coincida.
  @property({ attribute: false }) 
  renderItem: (item: any, index: number) => TemplateResult | any = 
    (item: any, _index: number) => html`<div>${JSON.stringify(item)}</div>`;

  @state() private currentIndex = 1; 
  @state() private isAnimating = false;
  @state() private isDragging = false;
  @state() private startX = 0;
  @state() private dragOffset = 0;

  @property({ type: Number }) autoplayInterval = 5000;
  @property({ type: Boolean }) autoplay = false;

  @query('.carousel-slides') container!: HTMLElement;

  private autoplayTimer?: number;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.autoplay) this.startAutoplay();
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
    if (this.isAnimating || this.items.length <= 1) return;
    this.isAnimating = true;
    this.currentIndex++;
  }

  private prev(): void {
    if (this.isAnimating || this.items.length <= 1) return;
    this.isAnimating = true;
    this.currentIndex--;
  }

  private handleTransitionEnd(): void {
    this.isAnimating = false;
    if (this.currentIndex >= this.items.length + 1) {
      this.currentIndex = 1;
    } else if (this.currentIndex <= 0) {
      this.currentIndex = this.items.length;
    }
  }

  private handleMouseDown = (e: MouseEvent | TouchEvent) => {
    if (this.items.length <= 1) return;
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
    const threshold = 100;
    if (this.dragOffset < -threshold) this.next();
    else if (this.dragOffset > threshold) this.prev();
    this.dragOffset = 0;
    if (this.autoplay) this.startAutoplay();
  };

  render(): TemplateResult {
    if (!this.items || this.items.length === 0) return html`<div>No hay items</div>`;

    const displayItems = [
      this.items[this.items.length - 1],
      ...this.items,
      this.items[0]
    ];

    const containerWidth = this.container?.offsetWidth || 1;
    const dragTranslate = (this.dragOffset / containerWidth) * 100;
    const transformX = -(this.currentIndex * 100) + dragTranslate;

    return html`
      <div class="carousel-wrapper"
           @mousedown=${this.handleMouseDown}
           @touchstart=${this.handleMouseDown}
           @mouseenter=${this.stopAutoplay}
           @mouseleave=${() => this.autoplay && this.startAutoplay()}>
        
        <div class="carousel-viewport">
          <div class="carousel-slides ${this.isAnimating || !this.isDragging ? 'animate' : ''}" 
               style="transform: translateX(${transformX}%)"
               @transitionend=${this.handleTransitionEnd}>
            ${displayItems.map((item, index) => html`
              <div class="carousel-item">
                ${this.renderItem(item, index)}
              </div>
            `)}
          </div>
        </div>

        <button class="nav-btn prev" @click=${this.prev} aria-label="Anterior">‹</button>
        <button class="nav-btn next" @click=${this.next} aria-label="Siguiente">›</button>

        <div class="indicators">
            ${this.items.map((_, i) => html`
                <div class="dot ${this.currentIndex === i + 1 ? 'active' : ''}"></div>
            `)}
        </div>
      </div>
    `;
  }

  static styles = unsafeCSS(`
    :host { display: block; width: 100%; }
    .carousel-wrapper { position: relative; overflow: hidden; cursor: grab; user-select: none; }
    .carousel-wrapper:active { cursor: grabbing; }
    .carousel-viewport { width: 100%; overflow: hidden; }
    .carousel-slides { display: flex; will-change: transform; }
    .carousel-slides.animate { transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .carousel-item { min-width: 100%; box-sizing: border-box; display: flex; justify-content: center; }
    .nav-btn {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.8); border: none; width: 40px; height: 40px;
      border-radius: 50%; cursor: pointer; z-index: 10; font-size: 24px;
    }
    .prev { left: 10px; }
    .next { right: 10px; }
    .indicators {
      display: flex; justify-content: center; gap: 8px; margin-top: 10px;
    }
    .dot { width: 8px; height: 8px; background: #ccc; border-radius: 50%; transition: 0.3s; }
    .dot.active { background: #333; transform: scale(1.2); }
  `);
}