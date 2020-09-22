import BgDestinations from './assets/bg_collections_small.jpg';
import BgThemes from './assets/bg_collections_2_small.jpg';
import './collections.component.css';

export default class CollectionsComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
         <input type="image" src="${BgDestinations}" />
         <input type="image" src="${BgThemes}" />
        `;
    }
}