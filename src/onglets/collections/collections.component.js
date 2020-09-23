import BgDestinations from './assets/bg_collections_small.jpg';
import BgThemes from './assets/bg_collections_2_small.jpg';
import ButtonComponent from '../../elements/button/button.component.js';
import './collections.component.css';

export default class CollectionsComponent extends HTMLElement {
    constructor() {
        super();
        const btnDestinations = new ButtonComponent;
        btnDestinations.buttonText = 'destinations';
        btnDestinations.btnBackground = BgDestinations
        console.log(btnDestinations.htmlTags());
        this.innerHTML = `
            ${btnDestinations.htmlTags()}
        `;
    }
}