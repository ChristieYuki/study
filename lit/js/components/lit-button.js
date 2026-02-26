import { html, css, LitElement } from 'lit';

export class LitButton extends LitElement {
  constructor() {
    super();
}
render() {
    return html`
    <button>Lit Button</button>
    <p>This is a button component built with Lit.</p>
    `;
};
}

customElements.define('lit-button', LitButton);