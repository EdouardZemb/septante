import image from './home_medium.jpg';
import './home.component.css';

export default class HomeComponent extends HTMLElement {


    constructor() {
        super();
        this.htmlTag = '<home-component></home-component>';
        this.innerHTML = `
        <img src="${image}">
        `;
    }

    htmlTags() {
        return this.htmlTag;
    }
}

customElements.define('home-component', HomeComponent);