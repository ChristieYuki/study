import { LitElement, css, html } from 'lit';
export class LitText extends LitElement {
  static styles = [css`
    :host {
      display: block;
    } 
    h1 {
      color: red;
      font-size: 25px;
    }
    h1 {
      color: black;
      font-size: 21px;
    }
    p {
      color: gray;
      font-size: 18px;
    }
  `];

  static properties = {
    title: { type: String },
    description: { type: String }
  };

  constructor() {    
    super();
    this.title = 'Tittle of Lit Text Component';
    this.description = 'Description of Lit Text Component'; 
  };
  
  render() {
    return html`
      <h1>${this.title}</h1>
      <h2>Welcome to Lit</h2>
      <p>${this.description}</p>
    `;
  }
}

customElements.define('lit-text', LitText);