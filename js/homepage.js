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