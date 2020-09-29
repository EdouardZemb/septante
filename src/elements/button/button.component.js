
import './button.component.css';

export default class ButtonComponent extends HTMLButtonElement {

    get type() {
        return this.hasAttribute('type');
    }

    set type(value) {
        if (value === 'image') {
            this.setAttribute('type', value)
        } else {
            console.log('the type value is not allowed with the button-component')
        }
    }

    constructor() {
        super();


    }

    connectedCallback() {
        console.log('connectedCallback');
    }
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('attributeChangeCallback');
    }

}

customElements.define('button-component', ButtonComponent, {extends: 'button'} )