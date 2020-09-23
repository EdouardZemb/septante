
import './button.component.css';

export default class ButtonComponent extends HTMLElement {
    constructor() {
        // TODO: constructor call illegal ?
        super();

        this.buttonText;
        this.btnBackground;
        this.htmlTag = `<${this.buttonText}-button></${this.buttonText}-button>`;

        this.innerHTML = `
            <input type="image" src="${this.btnBackground}"/>
            <span>${this.buttonText}</span>
        `;
    }

    htmlTags() {
        return this.htmlTag;
    }

    set buttonText(value) {
        this.buttonText = value;
    }

    set btnBackground(url) {
        this.btnBackground = url;
    }
}