import './main.component.css';

/** Création du template */


export default class MainComponent extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
        const home = document.createElement('home-component');
        template.appendChild(home)

        this.shadow = this.attachShadow({ mode: 'open' });

        // Insère le template dans le shadowRoot
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._home = this.shadowRoot.querySelector('home-component')
    }
}

customElements.define('main-component', MainComponent);
