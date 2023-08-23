class header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div class="width-clamp">
            <a href="/">
                <img id="header-logo" class="vertically-aligned" src="img/GULogo.webp" alt="Games Unite Logo" width="42" height="42">
            </a>
            <nav>
                <ul id="nav-item-holder">
                    <li><a class="active" aria-current="page" href="/">Home</a></li>
                    <li><a href="commands">Commands</a></li>
                    <li><a href="faq">FAQ</a></li>
                </ul>
            </nav>
        </div>
        `
    }
}
class cookies extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <aside id="cookies-modal" tabindex="-1" aria-labelledby="cookies-modal" aria-hidden="true">
            <button id="cookies-button" type="button"></button>
            <img src="img/icons/checkmark.svg" alt="">
            <div>
                <h3>Cookies</h3>
                <p>First off, thanks for visiting the Games Unite website. <br> This site <b>DOES</b> have Google Analytics which includes cookies. <br> If this makes you uncomfortable, 
                    please consider checking out uBlock origin. <br> Other than that, please enjoy your stay! &lt;3
                </p>
            </div>
        </aside>
        `
    }
}

customElements.define('gu-header', header)
customElements.define('gu-cookies', cookies)