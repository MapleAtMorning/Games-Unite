function scrollFunc(id) {
    let sidebar = document.getElementById('sidebarContent');
    let openedCanvas = bootstrap.Offcanvas.getInstance(sidebar);
    let element = document.getElementById(id);

    openedCanvas.toggle(); 

    setTimeout(() => {
        element.scrollIntoView({behavior:"smooth", block:"center"});
        element.classList.add('playOut');
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
    }, 350);

    //! this is hell and unreadable I do not know javascript well, this was self taught and very very rough

}