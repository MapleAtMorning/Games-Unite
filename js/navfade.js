import {getCookie, mobileLight} from "./cookiehandler.js";

const nav = document.getElementById('navTop');
const logo = document.getElementById('headerLogo');
const header = document.getElementById('navTop');
const itemHolder = document.getElementById('nav-item-holder');
const root = document.querySelector(':root');
const rootstyle = getComputedStyle(root);

window.onscroll = function(){scrollFade()};
window.onresize = scrollFade;
scrollFade();

function scrollFade(){
    let primary = rootstyle.getPropertyValue('--primaryColor');
    let theme = getCookie("theme");

    if (document.documentElement.scrollTop < 100)  { // When at top of page
        nav.style.backgroundColor = primary+'00'; 

        if(theme == "light"){
            mobileLight()
            header.classList.remove('light-theming');
            header.classList.add('default-theming');
            if(window.innerWidth < 992){
                shadow("0 ");
                return;
            }
        }

        shadow("0.2rem ");
    } else { // When NOT at top of page
        nav.style.backgroundColor = primary+'ff'; 
        if(theme == "light"){
            mobileLight()
            if(window.innerWidth < 992){
                shadow("0 ");
                return;
            }
        }
        shadow("0 ");
    }
};

function shadow(distance){
    nav.style.textShadow = distance + distance + distance + '#000';
    logo.style.filter = 'drop-shadow(' + distance + distance + distance + '#000)';
}
