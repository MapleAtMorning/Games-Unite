const commandHTML = document.getElementsByTagName("h4");
const commandArray = Array.prototype.slice.call(commandHTML);
const vw = window.innerWidth;
console.log(commandArray);

function copy(text){
    navigator.clipboard.writeText(text);
};

if(vw > 992) {	

    commandArray.forEach((element) => {

        element.addEventListener("click", () => {

            let commandName = element.innerHTML.split(" ");
            copy(commandName[0]);
            alert("Copied " + commandName[0]);

        });
    });
};
