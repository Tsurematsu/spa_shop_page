import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from "./nabvar.css?raw";
@customElement('navbar-com')
export class NavbarCom extends LitElement {
    @property()
    name?: string = 'navbar-com';

    render(): TemplateResult {
        return html`
             <!-- Header -->
            <header>
                <div class="header-container">
                    <div class="search-bar">
                        <input type="text" placeholder="Buscar productos...">
                        <button>🔍</button>
                    </div>
                    
                    <div class="logo">
                        <h1>Artística RAMOS</h1>
                        <p>Tienda de arte ONLINE</p>
                    </div>
                    
                    <div class="header-actions">
                        <a href="#" class="action-btn">
                            👤 Entrar / Registrarse
                        </a>
                        <a href="#" class="action-btn">
                            🛒 Carrito (0) $0
                        </a>
                    </div>
                </div>
            </header>
            
            <!-- Navigation -->
            <nav>
                <div class="nav-container">
                    <a href="#">CATEGORÍAS ▼</a>
                    <a href="/">INICIO</a>
                    <a href="#">PRODUCTOS</a>
                    <a href="#">CURSOS 100% ONLINE</a>
                    <a href="#">CÓMO COMPRAR</a>
                    <a href="#">CAMBIOS Y DEVOLUCIONES</a>
                    <a href="#">QUIÉNES SOMOS</a>
                </div>
            </nav>
        `;
    }

    static styles = unsafeCSS(styles) 
}

declare global {
    interface HTMLElementTagNameMap {
        'navbar-com': NavbarCom;
    }
}