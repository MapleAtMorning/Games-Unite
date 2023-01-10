import {getCookie, mobileLight} from "./cookiehandler.js";

const nav = document.getElementById('nav-top');
const logo = document.getElementById('header-logo');
const navItems = document.getElementById('nav-item-holder');
const root = document.querySelector(':root');
const rootstyle = getComputedStyle(root);
const headerLogo = document.getElementById("header-logo");



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
            nav.classList.remove('light-theming');
            nav.classList.add('default-theming');
            headerLogo.src = "img/GULogo.webp";
        }
            shadow("0.2rem ");

    } else { // When NOT at top of page
        nav.style.backgroundColor = primary+'ff'; 
        if(theme == "light"){
            headerLogo.src = "img/GULogoBlack.webp";
            mobileLight()
        }
        shadow("0 ");
    }
};

function shadow(distance){
    logo.style.filter = 'drop-shadow(' + distance + distance + distance + '#000)';   
    nav.style.textShadow = distance + distance + distance + '#000';
    if(window.innerWidth > 992){
        navItems.style.textShadow = distance + distance + distance + '#000';
    }
}
