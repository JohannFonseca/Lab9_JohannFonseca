/* componente del panel amarillo (campaña) */
class CampaignPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          flex: 1;
          min-width: 350px;
          max-width: 550px;
        }

        .panel-amarillo {
          background: #f0c95c;
          padding: 3rem 2rem 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        /* textos de la campaña */
        .mensajes {
          margin-bottom: 1.5rem;
        }

        .mensaje {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .destacado {
          font-weight: 800;
          font-size: 1.8rem;
        }

        /* seccion del codigo qr */
        .qr-section {
          margin-bottom: 2rem;
        }

        .qr-texto {
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 0.5rem;
        }

        .qr-imagen {
          width: 120px;
          height: 120px;
          border-radius: 8px;
        }

        /* imagen del meme */
        .spiderman {
          width: 90%;
          max-width: 600px;
          margin-top: auto;
          margin-bottom: 1rem;
        }

        /* pie de pagina con logos */
        .footer {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          flex-wrap: wrap;
          justify-content: center;
        }

        .separador { color: #ccc; }
      </style>
      <section class="panel-amarillo">
        <campaign-title></campaign-title>
        
        <div class="mensajes">
          <p class="mensaje">El respeto no se negocia</p>
          <p class="mensaje destacado">¡Pará ya de acosar!</p>
        </div>

        <div class="qr-section">
          <p class="qr-texto">Si necesitas ayuda,<br>escaneá este QR:</p>
          <img src="qr.png" alt="QR" class="qr-imagen">
        </div>

        <img src="spiderman.png" alt="Spiderman" class="spiderman">

        <div class="footer">
          <span>UCR</span>
          <span class="separador">|</span>
          <span>UCR Libre de Acoso Sexual</span>
          <span class="separador">|</span>
          <span>SG Sede de Guanacaste</span>
        </div>
      </section>
    `;
  }
}

customElements.define('campaign-panel', CampaignPanel);
