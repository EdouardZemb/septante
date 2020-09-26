const template = document.createElement('template');

template.innerHTML = `
    <style>
    nav-component {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: static;
        flex-shrink: 2;
    }

    @media screen and (max-width: 900px) {
        nav-component {
            height: 75vh;
        }
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