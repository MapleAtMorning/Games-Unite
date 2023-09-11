const ls = window.localStorage
const root = document.querySelector(':root')
// const headerLogo = document.getElementById('header-logo')
let savedTheme

function themeColorUpdater(primary, primarylight, background, secondary, secondarydark, text, mute) {
    root.style.setProperty('--primaryColor', primary)
    root.style.setProperty('--primaryLight', primarylight)
    root.style.setProperty('--primaryBackground', background)
    root.style.setProperty('--secondaryColor', secondary)
    root.style.setProperty('--secondaryColorDark', secondarydark)
    root.style.setProperty('--textColor', text)
    root.style.setProperty('--muteText', mute)
}

function themeChanger() {
    try {
        savedTheme = ls.getItem("GUTheme")
        if (!savedTheme) {
            throw ("No theme")
        }
    } catch (error) {
        savedTheme = "contrast"
        ls.setItem("GUTheme", "contrast")
        console.warn("Theme couldn't load:", error)
    } finally {
        // if (savedTheme !== 'light') {
        //     headerLogo.src = '/img/GULogo.webp'
        // }else{
        //     headerLogo.src = '/img/GULogoBlack.webp'
        // }

        if (savedTheme === 'contrast') {
            themeColorUpdater(
                '#000000', // primary
                '#111111', // primaryLight
                '#000000', // primaryBackground
                '#4bf5a3', // secondary
                '#46aa7a', // secondaryDark
                '#ffffff', // text
                '#ffffff' // mute
            )

        } else if (savedTheme === 'default') {
            themeColorUpdater(
                '#1d2529', // primary
                '#283035', // primaryLight
                '#181d1f', // primaryBackground
                '#4bf5a3', // secondary
                '#46aa7a', // secondaryDark
                '#ffffff', // text
                '#6c757d' // mute
            )

        } else if (savedTheme === 'light') {
            themeColorUpdater(
                '#ECEEF4', // primary
                '#ccd0db', // primaryLight
                '#ffffff', // primaryBackground
                '#4bf5a3', // secondary
                '#46aa7a', // secondaryDark
                '#000000', // text
                '#4a4c4f' // mute
            )
        }
    }
}

// Check when radio buttons are clicked to change theme
const colorThemes = document.querySelectorAll('[name="theme"]')
colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        ls.setItem("GUTheme", themeOption.id)
        themeChanger()
    })
})

themeChanger()