class header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div class="width-clamp">
            <a href="/">
                <img id="header-logo" class="vertically-aligned" src="img/GULogo.webp" alt="Games Unite Logo" width="42" height="42">
            </a>
            <nav>
                <ul id="nav-item-holder">
                    <li><a id="page-index" href="/">Home</a></li>
                    <li><a id="page-commands" href="commands">Commands</a></li>
                    <li><a id="page-configs" href="configs">Configs</a></li>
                    <li><a id="page-faq" href="faq">FAQ</a></li>
                </ul>
            </nav>
        </div>
        `
    }
}

class cookies extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <aside id="cookies-modal" tabindex="-1" aria-labelledby="cookies-modal" aria-hidden="true" style="display:none">
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

class footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="width-clamp">
            <form id="theme-picker" action="#">
                <fieldset>
                    <legend class="visually-hidden">Pick a theme</legend>
                    <input type="radio" name="theme" id="contrast">
                    <label class="visually-hidden" for="contrast">
                        High contrast theme
                    </label>
                    
                    <input type="radio" name="theme" id="default" checked>
                    <label class="visually-hidden" for="default">
                        Default theme
                    </label>

                    <input type="radio" name="theme" id="light">
                    <label class="visually-hidden" for="light">
                        Light theme
                    </label>
                </fieldset>
            </form>
            <div class="footer-content">
                <div class="footer-sect1">
                    <p>Please keep in mind this website is unofficial and community ran, although approved by kennyjeopardy. </p>
                    <p>Games Unite is still in testing and you may find bugs. Please feel free to report them in the <a href="https://discord.gg/zMmANqqFB5" target="_blank" aria-label="Opens in new tab">Discord</a></p>
                </div>
                
                <a id="random-link" target="_blank"><img src="img/GULogo.webp" alt="Games Unite Logo" width="42px"></a>
                <div class="footer-sect2">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>|</li>
                        <li><a href="/commands">Commands</a></li>
                        <li>|</li>
                        <li><a href="/configs">Configs</a></li>
                        <li>|</li>
                        <li><a href="/commands">Commands</a></li>
                        <li>|</li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.roblox.com/games/2746687316/Games-Unite-Testing-Place">Play</a></li>
                        <li>|</li>
                        <li><a href="https://discord.gg/zMmANqqFB5">Discord</a></li>
                        <li>|</li>
                        <li><a href="https://www.roblox.com/groups/5563139/Games-Unite">Roblox Group</a></li>
                    </ul>
                </div>

            </div>
        </div>
        `
    }
}

class configcard extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="image-wrapper">
            <img src="${this.getAttribute("src")}" alt="">
        </div>
        <h2>${this.getAttribute("cfgtitle")}</h2>
        <cite>${this.getAttribute("author")}</cite><br>
        <textarea readonly>${this.getAttribute("config")}</textarea>
        `
    }
}

customElements.define('gu-header', header)
customElements.define('gu-footer', footer)
customElements.define('gu-cookies', cookies)
customElements.define('gu-config-card', configcard)