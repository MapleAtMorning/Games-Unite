const acceptButton = document.getElementById("cookies-button")
const cookiesAlert = document.getElementById("cookies-modal")
const ls = window.localStorage
let rawJSON

// Cookies Accept
acceptButton.addEventListener("click", () => {
    acceptButton.disabled = true
    cookiesAlert.classList.add("cookies-anim-out")

    ls.setItem("GUCookiesAccepted", "true")

    cookiesAlert.addEventListener("animationend", () => {
        cookiesAlert.remove()
    })
})

if (ls.getItem("GUCookiesAccepted") !== null){
    cookiesAlert.remove()
}

// Add active to header
let page = window.location.pathname.split("/").pop().replace(".html", "");
if(!page){
    page = "index"
}
let navPageLink = document.getElementById(`page-${page}`)
navPageLink.classList.add("active")


// Random YT for footer
async function jsonGrab(){
    const result = await fetch("https://mapleatmorning.github.io/ytrandomjson/ytrandom.json")
    rawJSON = await result.json()
    return rawJSON
}
await jsonGrab()

let keys = Object.keys(rawJSON)

function grabRandom(){
    let randomItem = keys[Math.floor(Math.random()*keys.length)]
    document.getElementById('random-link').href = randomItem
}
document.getElementById('random-link').addEventListener("click", grabRandom)
grabRandom()