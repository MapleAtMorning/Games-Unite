const nav = document.getElementById('navTop');
const logo = document.getElementById('headerLogo')
window.onscroll = function(){scrollFade()};

function scrollFade(){
    if (document.documentElement.scrollTop < 100) {
        nav.style.backgroundColor = '#1d252900'; // When at top of page
        nav.style.textShadow = '0.2rem 0.2rem 0.2rem #000'
        logo.style.filter = 'drop-shadow(0.2rem 0.2rem 0.2rem #000)'
    } else {
        nav.style.backgroundColor = '#1d2529ff'; // When NOT at top of page
        nav.style.textShadow = '0 0 0 #000'
        logo.style.filter = 'drop-shadow(0 0 0 #000)'
    }
};