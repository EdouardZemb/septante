import HomeComponent from '../onglets/home/home.component.js';
import './main.component.css';

customElements.define('home-component', HomeComponent);

export default class MainComponent extends HTMLElement {
    constructor() {
        super();
        const home = new HomeComponent;

        this.innerHTML = `
        ${home.htmlTags()}
        `;
    }


}
