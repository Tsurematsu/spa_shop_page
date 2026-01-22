import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import app from './app/config/app';

import.meta.glob('./**/*-com.ts', { eager: true });

@customElement('my-element')
export class MyElement extends LitElement {
  private router = new Router(this, app.pages);
  constructor() {
		super();
		app.router = this.router;
	}
  render = () => html` 
    <navbar-com></navbar-com>
    ${this.router.outlet()}
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}


