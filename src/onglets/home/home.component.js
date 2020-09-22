import image from './IMG_3350.jpg';
import './home.component.css';

export default class HomeComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <img src="${image}">
        `;
    }
}