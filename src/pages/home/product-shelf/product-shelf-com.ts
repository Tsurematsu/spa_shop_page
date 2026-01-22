import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import styles from "./product-shelf.css?raw";
@customElement('product-shelf-com')
export class ProductShelfCom extends LitElement {
  @property({ type: Array }) items: any[] = [];
  
  @property({ attribute: false }) 
  renderItem: (item: any, index: number) => TemplateResult | any = 
    (item: any) => html`<div class="default-card">${item.name}</div>`;

  // PROPIEDAD PARA PERSONALIZAR EL ANCHO: 
  // Cuántos productos se ven al mismo tiempo (ej: 4, 3, 2.5)
  @property({ type: Number }) itemsPerView = 4;
  
  // Espacio entre ítems en píxeles
  @property({ type: Number }) gap = 16;

  @state() private currentIndex = 0;
  @state() private isAnimating = false;
  @state() private isDragging = false;
  @state() private startX = 0;
  @state() private dragOffset = 0;

  @query('.shelf-viewport') viewport!: HTMLElement;

  // Clona el número de ítems necesarios para que no se vean huecos
  private get clonesCount() {
    return Math.ceil(this.itemsPerView);
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

  private handleTransitionEnd(): void {
    this.isAnimating = false;
    // Reset para efecto infinito
    if (this.currentIndex >= this.items.length) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = this.items.length - 1;
    }
  }

  private handleMouseDown = (e: MouseEvent | TouchEvent) => {
    if (this.items.length <= this.itemsPerView) return;
    this.isDragging = true;
    this.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    this.dragOffset = 0;
  };

  private handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!this.isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    this.dragOffset = currentX - this.startX;
  };

  private handleMouseUp = () => {
    if (!this.isDragging) return;
    this.isDragging = false;
    const threshold = 70; // Sensibilidad del arrastre
    if (this.dragOffset < -threshold) this.next();
    else if (this.dragOffset > threshold) this.prev();
    this.dragOffset = 0;
  };

  render(): TemplateResult {
    if (!this.items.length) return html``;

    // Lógica de clonación infinita
    const headClones = this.items.slice(-this.clonesCount);
    const tailClones = this.items.slice(0, this.clonesCount);
    const displayItems = [...headClones, ...this.items, ...tailClones];

    // Cálculos de ancho y posición
    const itemWidthPercentage = 100 / this.itemsPerView;
    const offsetBase = (this.currentIndex + this.clonesCount) * itemWidthPercentage;
    
    const containerWidth = this.viewport?.offsetWidth || 1;
    const dragPercentage = (this.dragOffset / containerWidth) * 100;
    const transformX = -offsetBase + dragPercentage;

    return html`
      <div class="shelf-wrapper">
        <div class="shelf-viewport" 
             @mousedown=${this.handleMouseDown}
             @touchstart=${this.handleMouseDown}
             @mousemove=${this.handleMouseMove}
             @touchmove=${this.handleMouseMove}
             @mouseup=${this.handleMouseUp}
             @touchend=${this.handleMouseUp}
             @mouseleave=${this.handleMouseUp}>
          
          <div class="shelf-container ${this.isAnimating || !this.isDragging ? 'animate' : ''}"
               style="transform: translateX(${transformX}%); gap: ${this.gap}px;"
               @transitionend=${this.handleTransitionEnd}>
            
            ${displayItems.map((item, i) => {
              // Calculamos el ancho exacto restando el gap proporcional
              const widthAdjust = (this.gap * (this.itemsPerView - 1)) / this.itemsPerView;
              return html`
                <div class="shelf-item" 
                     style="flex: 0 0 calc(${itemWidthPercentage}% - ${widthAdjust}px)">
                  ${this.renderItem(item, i)}
                </div>
              `;
            })}
          </div>
        </div>

        <button class="nav-btn prev" @click=${this.prev} ?disabled=${this.items.length <= this.itemsPerView}>‹</button>
        <button class="nav-btn next" @click=${this.next} ?disabled=${this.items.length <= this.itemsPerView}>›</button>

        <div class="indicators">
          ${this.items.map((_, i) => html`
            <div class="dot ${this.currentIndex === i || 
                             (this.currentIndex === -1 && i === this.items.length - 1) ||
                             (this.currentIndex === this.items.length && i === 0) ? 'active' : ''}"></div>
          `)}
        </div>
      </div>
    `;
  }

  static styles = unsafeCSS(styles);
}