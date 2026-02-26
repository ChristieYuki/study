import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("custom-card")
export class CustomCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      padding: 16px;
      height: fit-content;
      width: 300px;
      margin: 16px auto;
    }

    /* Header */
    ::slotted([slot="header"]) {
      font-weight: bold;
      border-bottom: solid 1px #555;
      margin-bottom: 8px;
      font-size: 1.2rem;
    }

    /* Body */
    ::slotted([slot="body"]) {
      line-height: 1.5;
      font-size: 1rem;
    }

    /* Footer */
    ::slotted([slot="footer"]) {
      font-size: 0.9rem;
      color: #555;
      padding-top: 16px;
      text-align: right;
    }
  `;

  @property()
  public open: Boolean = true;

  render() {
    return html`
      <slot name="header"></slot>
      ${
        this.open ? html`<slot name="body"></slot>` : undefined
      }
      <slot name="footer"></slot>
    `;
  }
}
