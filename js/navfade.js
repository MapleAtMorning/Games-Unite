const nav = document.getElementById('navTop');
const logo = document.getElementById('headerLogo');
const root = document.querySelector(':root');
const rootstyle = getComputedStyle(root);
let primary = rootstyle.getPropertyValue('--primaryColor');
window.onscroll = function(){scrollFade()};


function scrollFade(){
    let primary = rootstyle.getPropertyValue('--primaryColor');
    if (document.documentElement.scrollTop < 100) {
        nav.style.backgroundColor = primary+'00'; // When at top of page
        nav.style.textShadow = '0.2rem 0.2rem 0.2rem #000';
        logo.style.filter = 'drop-shadow(0.2rem 0.2rem 0.2rem #000)';
    } else {
        nav.style.backgroundColor = primary+'ff'; // When NOT at top of page
        nav.style.textShadow = '0 0 0 #000';
        logo.style.filter = 'drop-shadow(0 0 0 #000)';
    }
};