export default class ContactComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
         Contact
        `;
    }
}

customElements.define('contact-component', ContactComponent);
