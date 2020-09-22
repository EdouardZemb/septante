import './style.css';
import MainComponent from './MainComponent/MainComponent';
import NavComponent from './NavComponent/NavComponent';

customElements.define('main-component', MainComponent);
customElements.define('nav-component', NavComponent);

document.body.innerHTML = `
<main>
    <main-component></main-component>
    <nav-component></nav-component>
</main>
`;