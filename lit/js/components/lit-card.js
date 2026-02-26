import { LitElement, html } from 'lit';
export class LitCard extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <div class="card">
        <h2>Lit Card</h2>
        <p>This is a card component built with Lit.</p>
      </div>
    `;
  }
}
customElements.define('lit-card', LitCard);