const itemHolder = document.getElementById('nav-item-holder');
const header = document.getElementById('navTop');
let theme = getCookie("theme");
const root = document.querySelector(':root');
const rootstyle = getComputedStyle(root);

export function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    // Simple string that makes the cookies expire after 1 year instead of on browser close.

    document.cookie = name + "=" + value + ";" + expires + "; SameSite=Strict";
}

export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieList = decodedCookie.split(';');
    for (let i = 0; i < cookieList.length; i++) {
        let c = cookieList[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// HEAVILY HEAVILY LEARNT AND COPIED FROM https://www.w3schools.com/js/js_cookies.asp

function cookieChecker(){
    const modal = new bootstrap.Modal(document.getElementById('cookiesModal'));
    if(getCookie("cookiesApproved")){
        return;
    }
    // Check if cookies have already been approved, if so return so code below DOESN'T RUN.

    modal.show();
    // Simply bring up the cookies modal popup.

    const modalQuery = document.querySelector('#cookiesModal');
    modalQuery.addEventListener('hidden.bs.modal', event => {
        setCookie("cookiesApproved", "Told you we didn't have trackers.");
        setCookie("theme", "default");
    })
    // Check for the modal to be closed, only possible through the accept button, and add the cookiesApproved cookie.
}

function themeColorUpdater(primary, primarylight, background, secondary, secondarydark, text, mute){
    root.style.setProperty("--primaryColor", primary)
    root.style.setProperty("--primaryLight", primarylight)
    root.style.setProperty("--primaryBackground", background)
    root.style.setProperty("--secondaryColor", secondary)
    root.style.setProperty("--secondaryColorDark", secondarydark)
    root.style.setProperty("--textColor", text)
    root.style.setProperty("--muteText", mute)
}

function themeChanger(){
    theme = getCookie("theme");
    if(getCookie("theme")){   
        
        if(theme != "light"){header.classList.remove("light-theming");}
        
        if(theme == "contrast"){
            themeColorUpdater(
                "#000000", //primary
                "#585858", //primaryLight
                "#000000", //primaryBackground
                "#4bf5a3", //secondary
                "#46aa7a", //secondaryDark
                "#ffffff", //text
                "#ffffff" //mute
            )
            header.classList.remove("navbar-light");
            header.classList.add("navbar-dark");
            header.classList.remove('light-theming');
            header.classList.add('default-theming');
            itemHolder.classList.remove('light-theming');
            itemHolder.classList.remove('default-theming');
        }
        else if(theme == "default"){
            themeColorUpdater(
                "#1d2529", //primary
                "#283035", //primaryLight
                "#181d1f", //primaryBackground
                "#4bf5a3", //secondary
                "#46aa7a", //secondaryDark
                "#ffffff", //text
                "#6c757d" //mute
            )
            header.classList.remove("navbar-light");
            header.classList.add("navbar-dark");
            header.classList.remove('light-theming');
            header.classList.add('default-theming');
            itemHolder.classList.remove('light-theming');
            itemHolder.classList.remove('default-theming');
        }
        else if(theme == "light"){
            themeColorUpdater(
                "#ECEEF4", //primary
                "#ccd0db", //primaryLight
                "#ffffff", //primaryBackground
                "#4bf5a3", //secondary
                "#46aa7a", //secondaryDark
                "#000000", //text
                "#6c757d" //mute
            )
            header.classList.remove("navbar-dark");
            header.classList.add("navbar-light");
            header.classList.add('light-theming');
            header.classList.remove('default-theming');
        }
        header.style.backgroundColor = rootstyle.getPropertyValue('--primaryColor');
    }
}

// Wizardry with the light theme to make it always have proper light navigation on mobile
export function mobileLight(){
    let theme = getCookie("theme");
    if(theme == "light"){
        header.classList.remove('default-theming');
        header.classList.add('light-theming');
        if(window.innerWidth < 992){
            
            itemHolder.classList.remove('default-theming');
            itemHolder.classList.add('light-theming');
            return;
        }
        itemHolder.classList.remove('light-theming');
        itemHolder.classList.add('default-theming');
    }
}

// Check when radio buttons are clicked to change theme
const colorThemes = document.querySelectorAll('[name="theme"]');
colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        setCookie("theme", themeOption.id);
        themeChanger();
    });
});

const setTheme = function () {
    const activeTheme = getCookie("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    // fallback for no :has() support
    document.documentElement.className = activeTheme;
};

// This code has been taken from Kevin Powell's great theme selector with :has() tutorial

window.onresize = mobileLight;
themeChanger();
mobileLight();
if(window.location.pathname == "/"){
    cookieChecker();
}
console.log(window.location.pathname)
document.onload = setTheme();