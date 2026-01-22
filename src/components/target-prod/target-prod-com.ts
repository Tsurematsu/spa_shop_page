import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './target-prod.css?raw';
import app from '../../app/config/app';

@customElement('target-prod-com')
export class TargetProdCom extends LitElement {
  @property({ type: String }) badge = '';
  @property({ type: String }) image = '';
  @property({ type: String }) alt = 'Producto';
  @property({ type: String }) productName = '';
  @property({ type: String }) oldPrice = '';
  @property({ type: String }) currentPrice = '';
  @property({ type: String }) installments = '';
  @property({ type: String }) buttonText = 'Comprar';

  render(): TemplateResult {
    return html`
      <div @click=${()=>app.navigate("/product")} class="product-card">
        ${this.badge
          ? html`<div class="product-badge">${this.badge}</div>`
          : null}

        <img src="${this.image}" alt="${this.alt}" />

        <div class="product-name">${this.productName}</div>

        <div class="product-price">
          ${this.oldPrice
            ? html`<div class="old-price">${this.oldPrice}</div>`
            : null}

          <div class="current-price">${this.currentPrice}</div>

          ${this.installments
            ? html`<div class="installments">${this.installments}</div>`
            : null}
        </div>

        <button class="buy-button">${this.buttonText}</button>
      </div>
    `;
  }

  static styles = unsafeCSS(styles);
}

declare global {
  interface HTMLElementTagNameMap {
    'target-prod-com': TargetProdCom;
  }
}
