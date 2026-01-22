import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from "./home.css?raw";
import apiProductos from '../../app/productos/apiProductos';
import app from '../../app/config/app';

app.pages.push({
    path: '/', render: () => html`
    <home-com></home-com>
`});

@customElement('home-com')
export class InicioCom extends LitElement {
  @property()
  name?: string = 'home-com';

  render(): TemplateResult {

    const renderCard = (item:any)=>html`
      <target-prod-com
        badge="Destacados"
        image=${item.img}
        alt="Promo"
        productName=${item.title}
        oldPrice=${item.pack}
        currentPrice=${item.offert.join("\n")}
        installments=${item.detail}
        buttonText="Comprar"
      ></target-prod-com>
    `

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
    

    return html`
    <carrucel-com></carrucel-com>
    
    <section class="category-grid">
        <!-- Tus categorías aquí -->
        <div class="carousel-container-full">
          <generic-carousel-com
            .items=${apiProductos.slice(1, 5)} 
            .renderItem=${renderCard}
            .autoplay=${true}
          ></generic-carousel-com>
        </div>
    </section>
    
    <!-- Destacados -->
    <section class="products-section">
        <h2 class="section-title">Destacados</h2>
        <!-- ELIMINAMOS la clase products-grid para que el carrusel use el 100% -->
        <div class="carousel-container-full">
            <product-shelf-com 
                .items=${apiProductos.slice(6, 11)} 
                .renderItem=${renderCard1}
                .itemsPerView=${4}  /* Cambiado a 4 para que se vea como tu foto */
                .gap=${20}>
            </product-shelf-com>
        </div>
    </section>
    
    <!-- Novedades -->
    <section class="products-section">
        <h2 class="section-title">Novedades</h2>
        <!-- USAMOS product-shelf-com fuera de la grid de 5 columnas -->
        <div class="shelf-container-full">
          <product-shelf-com 
            .items=${apiProductos.slice(12, 22)} 
            .renderItem=${renderCard1}
            .itemsPerView=${4}  /* Cambiado a 4 para que se vea como tu foto */
            .gap=${20}>
          </product-shelf-com>
        </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="benefits-section">
        <div class="benefits-container">
            <div class="benefit-item">
                <div class="benefit-icon">🚚</div>
                <h3>ENVÍO GRATIS</h3>
                <p>En compras superiores a $20.000<br>Envíos a todo el país</p>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">💳</div>
                <h3>Hasta 3 Cuotas Sin INTERÉS</h3>
                <p>En todos los medios de pago</p>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">💰</div>
                <h3>15% de DESCUENTO</h3>
                <p>Pagando con Transferencia</p>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">✓</div>
                <h3>Comprá con Confianza</h3>
                <p>Compra protegida y garantizada</p>
            </div>
        </div>
    </section>
    
    `;
  }
  static styles = unsafeCSS(styles)
}
declare global {
  interface HTMLElementTagNameMap {
    'home-com': InicioCom;
  }
}