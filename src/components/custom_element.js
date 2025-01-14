class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._name = '';
    this._color = 'red';
  }

  static get observedAttributes() {
    return ['name', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      this._name = newValue;
      this.updateContent();
    }
    if (name === 'color') {
      this._color = newValue;
      this.updateStyles();
    }
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <div class="custom-container">
        <h2>Hello, <span id="name">${this._name}</span></h2>
        <button id="change-name">Change Name</button>
        <button id="change-color">Change Color</button>
      </div>
      <style>
        .custom-container {
          font-family: Arial, sans-serif;
          padding: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
        }
        h2 {
          color: ${this._color};
        }
      </style>
    `;
    this.shadowRoot.querySelector('#change-name').addEventListener('click', () => this.changeName());
    this.shadowRoot.querySelector('#change-color').addEventListener('click', () => this.changeColor());
  }

  updateContent() {
    this.shadowRoot.querySelector('#name').textContent = this._name;
  }

  updateStyles() {
    this.shadowRoot.querySelector('h2').style.color = this._color;
  }

  changeName() {
    const newName = prompt("Introduce un nuevo nombre:");
    if (newName) {
      this.setAttribute('name', newName);
    }
  }

  changeColor() {
    const newColor = prompt("Introduce un nuevo color:");
    if (newColor) {
      this.setAttribute('color', newColor);
    }
  }
}

customElements.define('custom-element', CustomElement);
