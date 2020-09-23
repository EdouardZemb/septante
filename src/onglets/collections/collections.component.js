import BgDestinations from './assets/bg_collections_small.jpg';
import BgThemes from './assets/bg_collections_2_small.jpg';
import './collections.component.css';

export default class CollectionsComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <div class="collection-button">
            <input type="image" src="${BgDestinations}"/>
            <span>destinations</span>
        </div>
        `;
    }
}