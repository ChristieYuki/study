import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-button")
export class CustomButton extends LitElement {
  @property({ type: String }) label = "Clique";
  static styles = css`
    button {
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background: #000;
      color: #fff;
    }
  `;

  private handleClick() {
    this.dispatchEvent(
      new Event("onAction", {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html` <button @click=${this.handleClick}>${this.label}</button> `;
  }
}
