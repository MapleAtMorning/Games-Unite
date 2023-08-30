const dropdownButtons = document.getElementsByClassName("dropdown-button")
const dropdownButtonsArray = Array.prototype.slice.call(dropdownButtons)
const commandHTML = document.getElementsByTagName('h4')
const commandArray = Array.prototype.slice.call(commandHTML)
const copiedPopup = document.getElementById('clipboard-alert')
let vw = window.innerWidth

function copy (text) {
  navigator.clipboard.writeText(text)
};

function scrollFunc (id) {
  const vw = window.innerWidth
  const element = document.getElementById(id)
  let timeDelay

  if (vw < 992) {
    timeDelay = 350
  } else {
    timeDelay = 0
  };

  setTimeout(() => {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    element.classList.add('play-out')
    element.addEventListener('animationend', () => {
      element.style.letterSpacing = '0.3em'
      element.classList.remove('play-out')
      setTimeout(() => {
        element.classList.add('play-in')
        setTimeout(() => {
          element.classList.remove('play-in')
          element.style.letterSpacing = '0em'
        }, 1001)
      }, 1000)
    })
  }, timeDelay)

  //! this is hell and unreadable I do not know javascript well, this was entierly self taught and thrown together
}

// This is to add the copy functionality to each command.
commandArray.forEach((element) => {
  element.addEventListener('click', () => {
    vw = window.innerWidth
    if (vw > 992) {
      const commandName = element.innerHTML.split(' ')
      copy(commandName[0])

      /* IF the copied animation / popup is already visible then do not run it twice. Not placed higher so that it still properly copies but doesn't play the animation twice.
            Next is simply adding the class and allowing the popup to be visible, and then removing it afterwards and setting it back to hidden display. Display none is to stop it from blocking the theme selector. */
      if (copiedPopup.classList.contains('clip-anim')) {
        return
      }
      copiedPopup.classList.add('clip-anim')
      copiedPopup.style.display = 'block'
      setTimeout(() => {
        copiedPopup.classList.remove('clip-anim')
        copiedPopup.style.display = 'none'
      }, 5001)
    }
  })
})



// TODO: Dropdown Manager (Desktop)
let currentlyOpen

function toggleOpen(element, value){
  const elementDropdown = document.getElementById(element.getAttribute("aria-controls"))
  if (value == "close"){
    elementDropdown.style.opacity = 0
    elementDropdown.style.display = "none"
    element.setAttribute("aria-expanded", "false")
  }else{
    elementDropdown.style.opacity = 1
    elementDropdown.style.display = "block"
    element.setAttribute("aria-expanded", "true")
    currentlyOpen = elementDropdown
  }
}

dropdownButtonsArray.forEach((element) => {
  element.addEventListener('click', () => {
  const elementDropdown = document.getElementById(element.getAttribute("aria-controls"))
  let elementDropdownOpened = element.getAttribute("aria-expanded")

  // TODO: Make only one open at a time by checking if you're clicking on a different dropdown, and if you are have the others close.
  // TODO: If currentlyOpen != elementDropdown close others, change currentlyOpen, and open the new one
    if(currentlyOpen == elementDropdown){
      console.log("SAME!")
    }

    // if (elementDropdownOpened == "true"){
    //   toggleOpen(element, "close")
    // } else{
    //   toggleOpen(element, "open")
    // }
  })
})
