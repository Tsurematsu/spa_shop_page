import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import app from '../../app/config/app';
import apiProductos from '../../app/productos/apiProductos';

const infoProducto = {
        id: '123',
        title: '20 Pinceles Xin Bowen 4 Puntas',
        code: 'XB-4P-20',
        currentPrice: 22312,
        oldPrice: 25354.80,
        discount: 12,
        bankPrice: 18965.20,
        installments: { count: 3, value: 7437.33 },
        images: [
          'https://picsum.photos/seed/brushset1/600/600',
          'https://picsum.photos/seed/brushset2/600/600',
          'https://picsum.photos/seed/brushset3/600/600'
        ],
        description: {
          subtitle: 'Promo Pack 20 Pinceles de 4 Puntas Xin Bowen',
          items: [
            '1 Blister de 5 Pinceles Punta Plana',
            '1 Blister de 5 Pinceles Punta Angular',
            '1 Blister de 5 Pinceles Punta Redonda'
          ],
          extra: [
            'Cerda Sintética - Calidad Media/Superior',
            'Ideal para pintar con acrílicos y Óleos.'
          ]
        }
      };

app.pages.push({
    path: '/product', render: () => html`
    <product-detail-com
      .product=${infoProducto}
      .similarProducts=${apiProductos.slice(1, 12)}
    ></product-detail-com>
`});

interface ProductData {
  id: string;
  title: string;
  code: string;
  currentPrice: number;
  oldPrice: number;
  discount: number;
  bankPrice: number;
  installments: { count: number; value: number };
  images: string[];
  description: {
    subtitle: string;
    items: string[];
    extra: string[];
  };
}

@customElement('product-detail-com')
export class ProductDetailCom extends LitElement {
  // Propiedad principal que recibe los datos
  @property({ type: Object }) product?: ProductData;
  @property({ type: Array }) similarProducts: any[] = [];

  // Estados internos para la interactividad
  @state() private selectedImageIndex = 0;
  @state() private quantity = 1;

  private formatCurrency(value: number) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value);
  }

  private changeImage(index: number) {
    this.selectedImageIndex = index;
  }

  private updateQuantity(delta: number) {
    const newQty = this.quantity + delta;
    if (newQty >= 1) this.quantity = newQty;
  }

  private handleAddToCart() {
    this.dispatchEvent(new CustomEvent('add-to-cart', {
      detail: { product: this.product, quantity: this.quantity },
      bubbles: true,
      composed: true
    }));
    alert(`Agregado al carrito: ${this.quantity} unidad(es)`);
  }

  render(): TemplateResult {

    const renderCard1 = (item:any)=>html`
      <target-prod-com
        badge="Kit Acrílicos + Difuminador"
        image=${item.img}
        alt="Promo"
        productName=${item.title}
        oldPrice=${item.pack}
        currentPrice=${item.offert.join("\n")}
        installments=${item.detail}
        buttonText="Comprar"
      ></target-prod-com>
    `
    
    if (!this.product) return html`<p>Cargando producto...</p>`;

    return html`

      
      <!-- Breadcrumb -->
      <div class="breadcrumb">
          <a href="#">Inicio</a> > <a href="#">Pinceles</a> > ${this.product.title}
      </div>
      
      <!-- Product Main Section -->
      <section class="product-section">
          <!-- Gallery -->
          <div class="product-gallery">
              <div class="main-image-container">
                  <div class="watermark">Artística RAMOS</div>
                  <img src="${this.product.images[this.selectedImageIndex]}" alt="Main" class="main-image">
              </div>
              <div class="thumbnail-gallery">
                  ${this.product.images.map((img, i) => html`
                      <div class="thumbnail ${this.selectedImageIndex === i ? 'active' : ''}" 
                           @click=${() => this.changeImage(i)}>
                          <img src="${img}" alt="Thumb ${i}">
                      </div>
                  `)}
              </div>
          </div>
          
          <!-- Info -->
          <div class="product-info">
              <div class="product-code">•${this.product.images.length} unidades</div>
              <h1 class="product-title">${this.product.title}</h1>
              <div class="product-code">Código: ${this.product.code}</div>
              
              <div class="price-section">
                  <div class="current-price">
                      ${this.formatCurrency(this.product.currentPrice)} 
                      <span class="discount-badge">${this.product.discount}% OFF</span>
                  </div>
                  <div class="old-price">Antes: ${this.formatCurrency(this.product.oldPrice)}</div>
                  <div class="payment-info">${this.formatCurrency(this.product.bankPrice)} con Transferencia Bancaria</div>
              </div>
              
              <div class="stock-info">
                  ${this.product.installments.count} cuotas sin interés de ${this.formatCurrency(this.product.installments.value)}
                  <br>10% de descuento pagando con Transferencia Bancaria
              </div>
              
              <div class="shipping-info">
                  <div class="info-item">
                      <span class="info-icon">✓</span>
                      <span><strong>Compra protegida</strong><br>Tus datos cuidados durante toda la compra.</span>
                  </div>
              </div>
              
              <div class="quantity-selector">
                  <span>Cantidad:</span>
                  <div class="quantity-controls">
                      <button @click=${() => this.updateQuantity(-1)}>-</button>
                      <input type="number" .value=${this.quantity.toString()} readonly>
                      <button @click=${() => this.updateQuantity(1)}>+</button>
                  </div>
              </div>
              
              <button class="add-to-cart-btn" @click=${this.handleAddToCart}>Agregar al carrito</button>
          </div>
      </section>
      
      <!-- Description -->
      <section class="description-section">
          <div class="description-content">
              <h2>Descripción</h2>
              <h3>${this.product.description.subtitle}</h3>
              <ul>
                  ${this.product.description.items.map(item => html`<li>${item}</li>`)}
              </ul>
              ${this.product.description.extra.map(text => html`<p>${text}</p>`)}
          </div>
      </section>

      <!-- Similar Products (Usando el shelf que creamos antes) -->
      <section class="similar-products">
          <h2>Productos similares</h2>
          <product-shelf-com
            .renderItem=${renderCard1}
            .items=${this.similarProducts}
            .itemsPerView=${4}>
          </product-shelf-com>
      </section>

      <!-- Footer & WhatsApp -->
      <footer>... (contenido del footer) ...</footer>
      <div class="whatsapp-btn">💬</div>
    `;
  }

  static styles = unsafeCSS(`
    :host { display: block; font-family: sans-serif; background: #f8f8f8; }
    * { box-sizing: border-box; }
    
    .top-bar { background: #4a4a4a; color: white; padding: 8px 40px; display: flex; justify-content: space-between; font-size: 12px; }
    header { background: white; padding: 20px 40px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .header-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
    
    .logo h1 { font-size: 32px; background: linear-gradient(135deg, #ff1493, #ff69b4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; margin: 0; }
    .logo p { margin: 0; font-size: 12px; color: #666; }

    .search-bar { display: flex; flex: 0 1 300px; }
    .search-bar input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px 0 0 4px; }
    .search-bar button { background: #ddd; border: none; padding: 10px; border-radius: 0 4px 4px 0; cursor: pointer; }

    .action-btn { background: #6b4c9a; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-size: 12px; }

    nav { background: white; padding: 15px; border-top: 1px solid #eee; text-align: center; }
    nav a { margin: 0 15px; text-decoration: none; color: #333; font-size: 13px; font-weight: bold; }

    .breadcrumb { max-width: 1400px; margin: 20px auto; padding: 0 40px; font-size: 12px; color: #666; }
    
    .product-section { max-width: 1400px; margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
    
    .main-image-container { background: white; padding: 20px; border-radius: 8px; position: relative; display: flex; justify-content: center; }
    .main-image { max-width: 100%; height: 400px; object-fit: contain; }
    .watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 50px; color: rgba(255, 20, 147, 0.05); pointer-events: none; font-weight: bold; }
    
    .thumbnail-gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 15px; }
    .thumbnail { background: white; padding: 5px; border: 2px solid transparent; cursor: pointer; border-radius: 4px; }
    .thumbnail.active { border-color: #ff1493; }
    .thumbnail img { width: 100%; height: 80px; object-fit: cover; }

    .product-info { background: white; padding: 30px; border-radius: 8px; }
    .product-title { font-size: 24px; margin: 0 0 10px 0; }
    .current-price { font-size: 32px; font-weight: bold; }
    .discount-badge { background: #c8ff00; font-size: 12px; padding: 2px 6px; border-radius: 4px; vertical-align: middle; }
    .old-price { text-decoration: line-through; color: #999; margin-top: 5px; }
    .payment-info { color: #00a650; font-weight: bold; margin-top: 10px; }

    .quantity-selector { display: flex; align-items: center; gap: 15px; margin: 20px 0; }
    .quantity-controls { display: flex; border: 1px solid #ddd; border-radius: 4px; overflow: hidden; }
    .quantity-controls button { width: 40px; height: 40px; border: none; background: white; cursor: pointer; }
    .quantity-controls input { width: 50px; text-align: center; border: none; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }

    .add-to-cart-btn { width: 100%; background: #c8ff00; border: none; padding: 15px; font-weight: bold; font-size: 16px; border-radius: 4px; cursor: pointer; }
    
    .description-section { max-width: 1400px; margin: 40px auto; padding: 0 40px; }
    .description-content { background: white; padding: 30px; border-radius: 8px; line-height: 1.6; }

    .whatsapp-btn { position: fixed; bottom: 20px; right: 20px; background: #25d366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 100; cursor: pointer; }

    @media (max-width: 900px) {
      .product-section { grid-template-columns: 1fr; }
    }
  `);
}