const nav = document.getElementById('nav-top')
const navItems = document.getElementById('nav-item-holder')
const root = document.querySelector(':root')
const rootstyle = getComputedStyle(root)
const headerLogo = document.getElementById('header-logo')

window.onscroll = scrollFade
window.onresize = scrollFade
scrollFade()

function scrollFade() {
    const primary = rootstyle.getPropertyValue('--primaryColor')

    if (document.documentElement.scrollTop < 100) { // When at top of page
        nav.style.backgroundColor = primary + '00'

        shadow('0.2rem ')
    } else { // When NOT at top of page
        nav.style.backgroundColor = primary + 'ff'
        shadow('0 ')
    }
};

function shadow(distance) {
    headerLogo.style.filter = 'drop-shadow(' + distance + distance + distance + '#000)'
    nav.style.textShadow = distance + distance + distance + '#000'
    if (window.innerWidth > 992) {
        navItems.style.textShadow = distance + distance + distance + '#000'
    }
}
