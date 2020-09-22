import BgDestinations from './bg_collections.jpg';
import BgThemes from './bg_collections_2.jpg';
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