import { LitElement, html } from 'lit';
export class LitHelloWorld extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <h1>Hello World</h1>
      <p>This is a Hello World component built with Lit.</p>
    `;
  }
}
customElements.define('lit-hello-world', LitHelloWorld);