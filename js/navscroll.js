const nav = document.getElementById('navTop');
window.onscroll = function(){scrollFade()};


function scrollFade(){
    if (document.documentElement.scrollTop < 100) {
        nav.style.backgroundColor = '#1d252900'; // When at top of page
    } else {
        nav.style.backgroundColor = '#1d2529ff'; // When at top of page
    }
};
