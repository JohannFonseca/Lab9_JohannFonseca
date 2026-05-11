/* componente para el titulo animado del panel amarillo */
class CampaignTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* titulo principal con cajas de colores */
        .titulo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: flotar 4s ease-in-out infinite;
        }

        .linea {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* signos de exclamacion rosados */
        .signo {
          color: #e43e9e;
          font-size: 3.5rem;
          font-weight: 900;
        }

        /* cajas de colores con inclinacion */
        .caja {
          padding: 0.5rem 1.5rem;
          color: white;
          font-weight: 900;
          font-size: 2rem;
          transform: skewX(-12deg);
          border-radius: 4px;
        }

        /* enderezamos el texto dentro de la caja */
        .caja span {
          display: inline-block;
          transform: skewX(12deg);
        }

        .teal { background: #00abb3; }
        .purple { background: #6d459d; }

        @keyframes flotar {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      </style>
      <div class="titulo">
        <div class="linea">
          <span class="signo">¡</span>
          <div class="caja teal"><span>LA SEDE</span></div>
          <span class="signo">!</span>
        </div>
        <div class="linea">
          <div class="caja purple"><span>TE ACOMPAÑA</span></div>
        </div>
      </div>
    `;
  }
}

customElements.define('campaign-title', CampaignTitle);
