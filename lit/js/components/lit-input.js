import { LitElement, html } from "lit";

export class LitInput extends LitElement {
    constructor() {
        super();
        this.value = "";
    }
    render() {
        return html`
            <h2>Lit Input</h2>
            <input type="text" .value=${this.value} @input=${this._onInput} />
            <p>Current value: ${this.value}</p>
            <p>This is an input component built with Lit.</p>
        `;
    }
    _onInput(event) {
        this.value = event.target.value;
        this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    }
}
customElements.define('lit-input', LitInput);