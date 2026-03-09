import { html, css, LitElement } from 'lit';

export class LitHelloWorld extends LitElement {
  constructor() {
    super();
}
render() {
    return html`
    <h2>Lit Hello World</h2>
    <p>This is a Hello World component built with Lit.</p>
    `;
};
}

customElements.define('lit-hello-world', LitHelloWorld);