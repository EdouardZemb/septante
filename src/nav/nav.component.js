import './nav.component.css';

export default class NavComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <nav>
            <h1><a href="">Septante</a></h1>
                <ul>
                    <li><a href="">collections</a></li>
                    <li><a href="">contact</a></li>
                    <li><a href="">info</a></li>
                </ul>
        </nav>
        `;

        const a = document.querySelectorAll("a");
        a.forEach(e => {
            e.addEventListener("click", (event) => {
                event.preventDefault();
                const name = e.textContent.toLowerCase();
                const mainComponent = document.querySelector("main-component");
                if (customElements.get(`${name}-component`)) {
                    mainComponent.innerHTML = `
                    <${name}-component></${name}-component>
                    `;
                } else {
                    mainComponent.innerHTML = `
                    <home-component></home-component> 
                    `;
                }
            });
        });
    }
}

customElements.define('nav-component', NavComponent);
