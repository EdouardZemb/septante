import './main.component.css';

export default class MainComponent extends HTMLElement {
    constructor() {
        super();
        const home = new HomeComponent;
        this.innerHTML = `
        ${home.htmlTags()}
        `;
    }
}

customElements.define('main-component', MainComponent);
