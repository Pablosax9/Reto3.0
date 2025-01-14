class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.counterValue = 0;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <input type="text" id="counter" value="${this.counterValue}" readonly/>
      <button id="increase">Aumentar</button>
      <button id="decrease">Disminuir</button>
      <style>
        input, button {
          font-size: 18px;
          margin: 5px;
        }
      </style>
    `;
    this.shadowRoot.querySelector('#increase').addEventListener('click', () => this.updateCounter(1));
    this.shadowRoot.querySelector('#decrease').addEventListener('click', () => this.updateCounter(-1));
  }

  updateCounter(delta) {
    this.counterValue += delta;
    this.shadowRoot.querySelector('#counter').value = this.counterValue;
  }
}

customElements.define('counter-component', Counter);
