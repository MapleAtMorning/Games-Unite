const nav = document.getElementById('navTop');
const logo = document.getElementById('headerLogo');

const root = document.querySelector(':root');
const rootstyle = getComputedStyle(root);

const navLinks = document.getElementsByClassName('nav-link');

let primary = rootstyle.getPropertyValue('--primaryColor');
window.onscroll = function(){scrollFade()};


function scrollFade(){
    let primary = rootstyle.getPropertyValue('--primaryColor');
    if (document.documentElement.scrollTop < 100) { // When at top of page
        nav.style.backgroundColor = primary+'00'; 
        nav.style.textShadow = '0.2rem 0.2rem 0.2rem #000';
        logo.style.filter = 'drop-shadow(0.2rem 0.2rem 0.2rem #000)';

    } else { // When NOT at top of page
        nav.style.backgroundColor = primary+'ff'; 
        nav.style.textShadow = '0 0 0 #000';
        logo.style.filter = 'drop-shadow(0 0 0 #000)';
        
    }
};