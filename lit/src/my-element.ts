import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { User, AppState } from './interfaces';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      font-family: sans-serif;
    }
    
    button {
      padding: 10px 20px;
      background: #0066cc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:hover {
      background: #0052a3;
    }
  `;

  @property({ type: String })
  name: string = 'Mundo';

  @state()
  private count: number = 0;

  @state()
  private users: User[] = [];

  private handleClick(): void {
    this.count++;
  }

  private async fetchUsers(): Promise<void> {
    // Simulação de fetch
    this.users = [
      { id: 1, name: 'João', email: 'joao@example.com' },
      { id: 2, name: 'Maria', email: 'maria@example.com' }
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchUsers();
  }

  render() {
    return html`
      <h1>Olá, ${this.name}!</h1>
      <p>Contador: ${this.count}</p>
      <button @click=${this.handleClick}>Incrementar</button>
      
      <h2>Usuários:</h2>
      <ul>
        ${this.users.map(user => html`
          <li>${user.name} - ${user.email}</li>
        `)}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}