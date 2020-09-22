import image from './home_medium.jpg';
import './home.component.css';

export default class HomeComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <img src="${image}">
        `;
    }
}