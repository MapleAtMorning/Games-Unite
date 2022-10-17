function scrollFunc(id) {
    let element = document.getElementById(id);
    
    element.classList.add('playOut')
    element.scrollIntoView({behavior:"smooth", block:"center"});
    element.addEventListener("animationend", () => {

        element.style.letterSpacing = "0.3em";
        element.classList.remove('playOut');

        setTimeout(() => {
            element.classList.add('playIn');
            setTimeout(() => {
                element.classList.remove('playIn');
                element.style.letterSpacing = "0em";
            }, 1001); 
            
        }, 1000);         
    });

}