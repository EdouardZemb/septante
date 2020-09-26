import './button.component.css';

let buttonComponentCounter = 0;

const template = document.createElement('template');

template.innerHTML = `
    <style>
        :hoste {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--main-color-low-opacity);
            font-size: 2.5em;
        }
    </style>
    <input slot="image" type="image" src=""/>
    <span slot="text">Text par défaut</span>
    `;


export default class ButtonComponent extends HTMLElement {

    static get observedAttributes() {
        return ['src'];
    }

    constructor() {
        super();
        // la méthode bind permet de forcer une liaison entre une fonction et un objet
        this._onSlotChange = this._onSlotChange.bind(this);
        // créé un shadow DOM
        this.shadow = this.attachShadow({ mode: 'open' });

        this.htmlTag = `<button-component></button-component>`;

        // Insère le template dans le shadowRoot
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // Récupère les slots dans des variables
        this._imageSlot = this.shadowRoot.querySelector('input[slot=image]');
        this._textSlot = this.shadowRoot.querySelector('span[slot=text]');
        // lorsque l'évènement 'slotchange' est déclenché on appele notre fonction liée
        this._imageSlot.addEventListener('slotchange', this._onSlotChange);
        this._textSlot.addEventListener('slotchange', this._onSlotChange);
    }

    connectedCallback() {
        this._updateImageSrc();
    }

    get src() {
        const value = this.getAttribute('src');
        return value === null ? '' : value;
    }

    set src(value) {

        this.setAttribute('src', value);
        console.log("set src", src);
    }

    _updateImageSrc() {

        Promise.resolve()
        .then(_ => {
            if (!this.id) {
                this.id = `button-component-${buttonComponentCounter++}`;
              }
        });
    }

    htmlTags() {
        return this.htmlTag;
    }

    _onSlotChange() {
        console.log('_onSlotChange', this);
    }
}

customElements.define('button-component', ButtonComponent);
