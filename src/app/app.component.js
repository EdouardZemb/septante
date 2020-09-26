const template = document.createElement('template');

template.innerHTML = `
    <style>
    :host {
        display: flex;
        margin: auto;
        width: 90vw;
    }
    </style>
    <main slot="main">Main Slot</main>
    <nav-component></nav-component>
`;

export default class AppComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-component', AppComponent);