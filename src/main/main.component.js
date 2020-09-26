//import './main.component.css';

/** Création du template */
const template = document.createElement('template');
const home = document.createElement('home-component');
template.appendChild(home)


export default class MainComponent extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        // Insère le template dans le shadowRoot
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._home = this.shadowRoot.querySelector('home-component')
    }
}

customElements.define('main-component', MainComponent);
