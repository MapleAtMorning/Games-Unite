const acceptButton = document.getElementById("cookies-button")
const cookiesAlert = document.getElementById("cookies-modal")
const ls = window.localStorage

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