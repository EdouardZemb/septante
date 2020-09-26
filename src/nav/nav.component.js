import '../onglets/onglets.module.js';

export default class NavComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
        nav {
            display: flex;
            flex-direction: column;
            margin: auto;
            height: 100%;
            justify-content: center;
        }
        h1 {
            display: flex;
            justify-content: center;
            margin: auto;
            line-height: 1;
            padding-bottom: 2.5em;
            
        }
        
        h1 a {
            font-weight: 600;
            font-style: normal;
            font-size: 60pt;
            text-decoration: none;
            color: var(--main-font-color);
        }
        
        li {
            display: flex;
            flex-direction: row;
            justify-content: center;
            color: var(--main-color);
        }
        
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-around;
            list-style: none;
            background-color: var(--main-font-color);
        }
        ul a {
            color: var(--main-color);
            font-size: 30pt;
            text-decoration: none;
        }
        
        li a:hover {
            color: var(--main-font-color);
            text-shadow: -2px 0px var(--main-color), 0px 2px var(--main-color),  2px 0px var(--main-color), 0px -2px var(--main-color);
        }
        </style>
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
