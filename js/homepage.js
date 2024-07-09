// Cards Animations
// ===============================================================================================================================
let options = {
    threshold: 0.75
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.classList.contains(['anim'])) {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio >= 0.75) {
                    entry.target.style.animationPlayState = "running";
                }
            }
        }
    });
}, options);

for (let i = 0; i < document.querySelectorAll('.anim').length; i++) {
    observer.observe(document.querySelectorAll('.anim')[i]);
};

// Scrollfade
// ===============================================================================================================================
const header = document.getElementById("nav-top")
const nav = document.getElementsByTagName('nav')[0]
const navItems = document.getElementById('nav-item-holder')
const root = document.querySelector(':root')
const rootstyle = getComputedStyle(root)
const headerLogo = document.getElementById('header-logo')


window.onscroll = scrollFade
window.onresize = scrollFade

function scrollFade() {
    const primary = rootstyle.getPropertyValue('--primaryColor')
    
    if (document.documentElement.scrollTop < 100) { // When at top of page
        header.style.backgroundColor = primary + '00'
        shadow('0.2rem ')
        
        if (window.localStorage.getItem("GUTheme") === "light"){
            nav.classList.add("nav-light")
            headerLogo.src = '/img/GULogo.webp'
        }else if(nav.classList.contains("nav-light")){ //If not light but nav-light
            nav.classList.remove("nav-light")
        }
    } else { // When NOT at top of page
        header.style.backgroundColor = primary + 'ff'
        shadow('0 ')

        if (window.localStorage.getItem("GUTheme") === "light" && nav.classList.contains("nav-light")){
            nav.classList.remove("nav-light")
            headerLogo.src = '/img/GULogoBlack.webp'
        }
    }
};
scrollFade()

function shadow(distance) {
    headerLogo.style.filter = 'drop-shadow(' + distance + distance + distance + '#000)'
    header.style.textShadow = distance + distance + distance + '#000'
    if (window.innerWidth > 992) {
        // navItems.style.textShadow = distance + distance + distance + '#000'
    }
}



// Carousel
// ===============================================================================================================================

const timeBetweenRotate = 7000
const timeDuringFade = 2000

let img1 = document.getElementById("carousel-img1")
let img2 = document.getElementById("carousel-img2")
let img3 = document.getElementById("carousel-img3")
let currentnum = 1

function nextimg(){
    let currentimg = document.getElementById(`carousel-img${currentnum}`)
    let toimg = document.getElementById(`carousel-img${currentnum + 1}`)
    let emptyimg = document.getElementById(`carousel-img${currentnum - 1}`)

    if (currentnum == 3){
        toimg = document.getElementById(`carousel-img1`)
        currentnum = 0
    } else if (currentnum == 1){
        emptyimg = document.getElementById(`carousel-img3`)
    }
    emptyimg.style.zIndex = 0
    currentimg.style.zIndex = 1
    toimg.style.zIndex = 2
    toimg.animate([{opacity: 0},{opacity: 1}], timeDuringFade)
}

function delayedLoop(delay) {       
  setTimeout(function() { 
    nextimg()                       
    delayedLoop(timeBetweenRotate);     
    currentnum++                        
  }, delay)
}

delayedLoop(timeBetweenRotate);

// Huma
// ===============================================================================================================================

const huma = document.getElementById("hiddenhuma")

function hidehuma(){
    let i = Math.floor(Math.random() * 25 + 1)
    if (i == 1){
        huma.style.display = "block"
    }
}

hidehuma()