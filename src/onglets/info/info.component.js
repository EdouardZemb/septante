export default class InfoComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
         Info
        `;
    }
}

customElements.define('info-component', InfoComponent);