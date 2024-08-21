// Random Configs
// ===============================================================================================================================

const random1 = document.getElementById("random1")
const rerollBtn = document.getElementById("reroll-btn")

const crosshairMod = document.getElementById("crosshair-mod")
const crosshairOutlineMod = document.getElementById("crosshair-outline-mod")
const crosshairDotMod = document.getElementById("crosshair-dot-mod")
const viewmodelMod = document.getElementById("viewmodel-mod")
const fovMod = document.getElementById("fov-mod")
const aspectRatioMod = document.getElementById("aspect-ratio-mod")

let currentCommands = ""

const crosshairList = [
    {command:"crosshair_alpha", value:0, type:"range", min:0, max:1}, 
    {command:"crosshair_gap", value:0, type:"range", min:-100, max:100}, //Todo: Find actual max and min
    {command:"crosshair_size", value:0, type:"range", min:0, max:100}, //Todo: Find actual max
    {command:"crosshair_thickness", value:0, type:"range", min:0, max:100}, //Todo: Find actual max
    {command:"crosshair_color", value1:255, value2:255, value3:255, type:"triple_range", min:0, max:"255"},
    {command:"crosshair_t", value:3, type:"either_or", chance:"4", opt1:0, opt2:1},
    {command:"crosshair_recoil_scale", value:0, type:"range", min:0, max:100} //Todo: Find actual max
]
const crosshairOutlineList = [
    // crosshair_outline = 1 THIS MUST BE TRUE
    {command:"crosshair_outline_thickness", value:0, type:"range", min:0, max:100},
    {command:"crosshair_outline_color", value1:255, value2:255, value3:255, type:"triple_range", min:0, max:"255"},
    {command:"crosshair_outline_alpha", value:0, type:"range", min:0, max:1}
]
const crosshairDotList = [
    // crosshair_dot = 1 THIS MUST BE TRUE
    {command:"crosshair_dot_alpha", value:0, type:"range", min:0, max:1},
    {command:"crosshair_dot_size", value:0, type:"range", min:0, max:100} //Todo: Find actual max
]
const viewmodelList = [
    {command:"viewmodel_arms", value:0, type:"either_or", chance:"2", opt1:0, opt2:1},
    {command:"viewmodel_flip", value:0, type:"either_or", chance:"2", opt1:0, opt2:1},
    {command:"viewmodel_offset", value1:0, value2:0, value3:0, type:"triple_range", min:-2, max:2},
]
const fov = {command:"default_fov", value:0, type:"range", min:45, max:120}
const aspect_ratio = {command:"camera_aspect_ratio", value:0, type:"range", min:0, max:1}

async function makeRandomConfig(){
    // CROSSHAIR
    let crosshairPromise = new Promise((resolve, reject) => {
        if (crosshairMod.checked){makeRandomCrosshair()} 
        resolve()
    })

    let crosshairOutlinePromise = new Promise((resolve, reject) => {
        if (crosshairOutlineMod.checked){makeRandomCrosshairOutline()} 
        resolve()
    })

    let crosshairDotPromise = new Promise((resolve, reject) => {
        if (crosshairDotMod.checked){makeRandomCrosshairDot()} 
        resolve()
    })

    let viewmodelPromise = new Promise((resolve, reject) => {
        if (viewmodelMod.checked){makeRandomViewmodel()} 
        resolve()
    })

    let fovPromise = new Promise((resolve, reject) => {
        if (fovMod.checked){currentCommands += fov.command + " " + rangeType(fov).value + "; "} 
        resolve()
    })

    let aspectRatioPromise = new Promise((resolve, reject) => {
        if (aspectRatioMod.checked){currentCommands += aspect_ratio.command + " " + rangeType(aspect_ratio).value + "; "} 
        resolve()
    })

    // I thought this promise would fix something but it didn't. I'm keeping this in just in case. Welp.
    await Promise.all([crosshairPromise, crosshairOutlinePromise, crosshairDotPromise, viewmodelPromise, fovPromise, aspectRatioPromise])
    for (const child of random1.children) {
        if (child.tagName == "TEXTAREA"){child.innerHTML = currentCommands}
    }
    currentCommands = "";

}

function makeRandomCrosshair(){
    let crosshairListCopy = JSON.parse(JSON.stringify(crosshairList))
    shuffleArray(crosshairListCopy)

    let cutNumber = getRandomNumber(100)
    if (cutNumber <= 20){
        crosshairListCopy.shift()
        crosshairListCopy.shift()
        crosshairListCopy.shift()
    }
    else if (cutNumber <= 40){
        crosshairListCopy.shift()
        crosshairListCopy.shift()
    }else if (cutNumber <= 70){
        crosshairListCopy.shift()
    }

    crosshairListCopy.forEach(command => {
        if (command.type == "range"){
            command = rangeType(command)
            currentCommands += command.command + " " + command.value + "; "
        }else if (command.type == "triple_range"){
            command = tripleRangeType(command)
            currentCommands += `${command.command} ${command.value1} ${command.value2} ${command.value3}; `
        }else if (command.type == "either_or"){
            command = eitherOrType(command)
            currentCommands += command.command + " " + command.value + "; "
        }
    });
}

function makeRandomCrosshairOutline(){
    let crosshairOutlineListCopy = JSON.parse(JSON.stringify(crosshairOutlineList))
    shuffleArray(crosshairOutlineListCopy)

    let cutNumber = getRandomNumber(100)
    if (cutNumber <= 20){
        crosshairOutlineListCopy.shift()
        crosshairOutlineListCopy.shift()
    }
    else if (cutNumber <= 40){
        crosshairOutlineListCopy.shift()
    }

    crosshairOutlineListCopy.forEach(command => {
        if (command.type == "range"){
            command = rangeType(command)
            currentCommands += command.command + " " + command.value + "; "
        }else if (command.type == "triple_range"){
            command = tripleRangeType(command)
            currentCommands += `${command.command} ${command.value1} ${command.value2} ${command.value3}; `
        }else{
            console.log("eitheorr")
            command = eitherOrType(command)
            currentCommands += command.command + " " + command.value + "; "
        }
    });
}

function makeRandomCrosshairDot(){
    let crosshairDotListCopy = JSON.parse(JSON.stringify(crosshairDotList))
    shuffleArray(crosshairDotListCopy)

    let cutNumber = getRandomNumber(100)
    if (cutNumber <= 20){
        crosshairDotListCopy.shift()
    }

    currentCommands += "crosshair_dot 1; "
    crosshairDotListCopy.forEach(command => {
        if (command.type == "range"){
            command = rangeType(command)
            currentCommands += command.command + " " + command.value + "; "
        }else if (command.type == "triple_range"){
            command = tripleRangeType(command)
            currentCommands += `${command.command} ${command.value1} ${command.value2} ${command.value3}; `
        }else{
            command = eitherOrType(command)
            currentCommands += command.command + " " + command.value + "; "
        }
    });
}

function makeRandomViewmodel(){
    let viewmodelListCopy = JSON.parse(JSON.stringify(viewmodelList))
    shuffleArray(viewmodelListCopy)
    
    let cutNumber = getRandomNumber(100)
    if (cutNumber <= 20){
        viewmodelListCopy.shift()
        viewmodelListCopy.shift()
    }
    else if (cutNumber <= 40){
        viewmodelListCopy.shift()
    }

    viewmodelListCopy.forEach(command => {
        if (command.type == "range"){
            command = rangeType(command)
            currentCommands += command.command + " " + command.value + "; "
        }else if (command.type == "triple_range"){
            command = tripleRangeType(command)
            currentCommands += `${command.command} ${command.value1} ${command.value2} ${command.value3}; `
        }else{
            command = eitherOrType(command)
            currentCommands += command.command + " " + command.value + "; "
        }
    });
}

function rangeType(obj){
    obj.value = ((Math.random() * (obj.max - obj.min)) + obj.min)

    if (obj.max > 10){obj.value = Math.floor(obj.value)}
    else{obj.value = Math.floor(obj.value*100)/100}

    return obj
}

function tripleRangeType(obj){
    // todo: turn this into a loop. thx
    obj.value1 = ((Math.random() * (obj.max - obj.min)) + obj.min)
    obj.value2 = ((Math.random() * (obj.max - obj.min)) + obj.min)
    obj.value3 = ((Math.random() * (obj.max - obj.min)) + obj.min)

    if (obj.max > 10){
        obj.value1 = Math.floor(obj.value1)
        obj.value2 = Math.floor(obj.value2)
        obj.value3 = Math.floor(obj.value3)
    }
    else{
        obj.value1 = Math.floor(obj.value1*100)/100
        obj.value2 = Math.floor(obj.value2*100)/100
        obj.value3 = Math.floor(obj.value3*100)/100
    }

    return obj
}

function eitherOrType(obj){
    obj.value = getRandomNumber(obj.chance) == obj.chance ? obj.opt1 : obj.opt2
    return obj
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getRandomNumber(max){
    return Math.floor(Math.random()*max)+1
}

rerollBtn.onclick = function(){makeRandomConfig()}

makeRandomConfig()

// Fullscreen Images
// ===============================================================================================================================

const configImgs = Array.prototype.slice.call(document.getElementsByClassName('gu-config-img'))

const fullscreenImgHolder = document.getElementById("fullscreen-img-holder")
const fullscreenImg = document.getElementById("fullscreen-img")
const exitFullscreenBtn = document.getElementById("exit-fullscreen-btn")

function openFullscreenImg(ImgToOpen){
    fullscreenImg.src = ImgToOpen
    fullscreenImgHolder.classList.remove("not-fullscreen")
}

function closeFullscreenImg(){
    fullscreenImg.src = ""
    fullscreenImgHolder.classList.add("not-fullscreen")
}

configImgs.forEach((element) => {
    element.addEventListener('click', () => {
        openFullscreenImg(element.src)
    })
})
exitFullscreenBtn.onclick = function(){closeFullscreenImg()}