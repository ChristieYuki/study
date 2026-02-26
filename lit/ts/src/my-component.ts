import { html, css, LitElement } from 'lit';

export class MyComponent extends LitElement {

  static styles = [css`
    :host {
        display: block;
    }
    h3 {
      color: blue;
    }
  `];

  render() {
    return html`
      <h3>Olá, Lit</h3>
      <p>Este é um componente LitElement.</p>
      `;
  }
}

customElements.define('my-component', MyComponent);