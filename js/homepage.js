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

// Carousel
// ===============================================================================================================================

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
    toimg.animate([{opacity: 0},{opacity: 1}], 2000)
}

function delayedLoop(delay) {       
  setTimeout(function() { 
    nextimg()                       
    delayedLoop(7000);     
    currentnum++                        
  }, delay)
}

delayedLoop(7000);     