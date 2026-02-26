import { LitElement } from "lit";

export class LitInput extends LitElement {
    constructor() {
        super();
        this.value = "";
    }
    render() {        return html`
            <input type="text" .value=${this.value} @input=${this._onInput} />
        `;
    }
    _onInput(event) {
        this.value = event.target.value;
        this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
    }
}
customElements.define('lit-input', LitInput);