class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <span id="message">Hola Mundo</span>
      <style>
        #message {
          cursor: pointer;
          color: blue;
          font-size: 24px;
        }
      </style>
    `;
    this.shadowRoot.querySelector('#message').addEventListener('click', () => {
      alert('Hola Mundo');
    });
  }
}

customElements.define('hello-world', HelloWorld);
