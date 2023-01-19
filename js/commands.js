const commandHTML = document.getElementsByTagName("h4");
const commandArray = Array.prototype.slice.call(commandHTML);
const copiedPopup = document.getElementById("clipboard-alert");
let vw = window.innerWidth;
console.log(commandArray);

function copy(text){
    navigator.clipboard.writeText(text);
};



commandArray.forEach((element) => {

    element.addEventListener("click", () => {
        vw = window.innerWidth;
        if (vw > 992) {
            let commandName = element.innerHTML.split(" ");
            copy(commandName[0]);

            /* IF the copied animation / popup is already visible then do not run it twice. Not placed higher so that it still properly copies but doesn't play the animation twice.
            Next is simply adding the class and allowing the popup to be visible, and then removing it afterwards and setting it back to hidden display. Display none is to stop it from blocking the theme selector. */
            if (copiedPopup.classList.contains("clip-anim")){
                return;
            }
            copiedPopup.classList.add("clip-anim");
            copiedPopup.style.display = "block"
            setTimeout(() => {
                copiedPopup.classList.remove("clip-anim");
                copiedPopup.style.display = "none"
            }, 5001);
        };
    });
});

