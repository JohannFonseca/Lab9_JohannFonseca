/* componente del panel azul (directorio) */
class DirectoryPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* contenedor del panel */
        :host {
          display: block;
          flex: 1;
          min-width: 350px;
          max-width: 550px;
        }

        .panel-azul {
          background: #1a3a6b;
          padding: 3rem 2rem 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        /* area para los items del directorio */
        .directorio {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* el pie de pagina con estilo ucr */
        .ucr-footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 4px;
          color: #1a3a6b;
          background: white;
          border-radius: 100% 100% 0 0;
          padding: 1.5rem 3.5rem 1rem;
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }
      </style>
      <section class="panel-azul">
        <div class="directorio">
          <slot></slot> <!-- aqui van los directory-item -->
        </div>
        <div class="ucr-footer">UCR</div>
      </section>
    `;
  }
}

customElements.define('directory-panel', DirectoryPanel);
