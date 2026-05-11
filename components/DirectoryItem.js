/* componente para cada fila del directorio */
class DirectoryItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /* se ejecuta al insertar el componente en el dom */
  connectedCallback() {
    const text = this.getAttribute('text') || '';
    
    this.shadowRoot.innerHTML = `
      <style>
        /* estilos internos de la fila */
        .fila {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        /* quitamos el borde a la ultima fila */
        :host(:last-child) .fila {
          border-bottom: none;
        }

        .texto {
          font-size: 1.2rem;
          font-weight: 500;
          color: white;
        }

        .flecha {
          font-size: 1.6rem;
          color: #b0c4de;
          transition: transform 0.3s ease;
        }

        /* animacion al pasar el mouse */
        .fila:hover .flecha {
          animation: moverFlecha 1.2s ease-in-out infinite;
          color: white;
        }

        @keyframes moverFlecha {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      </style>
      <div class="fila">
        <span class="texto">${text}</span>
        <span class="flecha">➜</span>
      </div>
    `;
  }
}

/* registramos el tag personalizado */
customElements.define('directory-item', DirectoryItem);
