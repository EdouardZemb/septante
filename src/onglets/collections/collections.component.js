import BgDestinations from './assets/bg_collections_small.jpg';
import BgThemes from './assets/bg_collections_2_small.jpg';
import './collections.component.css';

export default class CollectionsComponent extends HTMLElement {


    constructor() {
        super();


        this.innerHTML = `
            <button-component></button-component>
            <button-component></button-component>
        `;

    }

    connectedCallback() {
        const slottedSpan = shadowRoot.querySelector('button-component span');

        console.log(slottedSpan.assignedSlot);
        console.log(slottedSpan.slot);
    }
}

customElements.define('collections-component', CollectionsComponent);