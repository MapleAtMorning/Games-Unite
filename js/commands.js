var commandArray = document.getElementsByTagName("h4");
console.log(commandArray);

function copy(text){
    navigator.clipboard.writeText(text);
}