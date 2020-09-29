import BgDestinations from './assets/bg_collections_small.jpg';
import BgThemes from './assets/bg_collections_2_small.jpg';
import ButtonComponent from '../../elements/button/button.component.js';
import './collections.component.css';


export default class CollectionsComponent extends HTMLElement {
    constructor() {
        super();
        // this.innerHTML = `
        // <div class="button-container">
        //     <input type="image" src="${BgDestinations}"/>
        //     <span>destination</span>
        // </div>
        // <div class="button-container">
        //     <input type="image" src="${BgThemes}"/>
        //     <span>themes</span>
        // </div>
        // `;

        this.innerHTML = `
            <button is="button-component">Bob</button>
        `;
    }
    
}