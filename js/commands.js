const commandHTML = document.getElementsByTagName('h4')
const commandArray = Array.prototype.slice.call(commandHTML)
const copiedPopup = document.getElementById('clipboard-alert')
const cmdsNav = document.getElementById("cmds-nav")
let vw = window.innerWidth

function copy (text) {
  navigator.clipboard.writeText(text)
};

function scrollFunc (id) {
  const vw = window.innerWidth
  const element = document.getElementById(id)
  let timeDelay

  if (vw < 992) {
    timeDelay = 250
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
  cmdsNav.classList.replace("open-nav", "closed-nav")

  //! this is hell and unreadable I do not know javascript well, this was entierly self taught and thrown together
  //! I am kinda better at JS but I just do not want to touch this anymore. it works??? i guess??????
}

// This is to add the copy functionality to each command.
commandArray.forEach((element) => {
  element.addEventListener('click', () => {
    vw = window.innerWidth
    if (vw > 600) {
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



// Dropdown Manager (Desktop)
const dropdownButtons = document.getElementsByClassName("dropdown-button")
const dropdownButtonsArray = Array.prototype.slice.call(dropdownButtons)
let currentlyOpenDropdown
let isNavOpen = false

function toggleOpen(element, value){
  const elementDropdown = document.getElementById(element.getAttribute("aria-controls"))
  if (value == "close"){
    elementDropdown.style.display = "none"
    element.setAttribute("aria-expanded", "false")
  }else{
    elementDropdown.style.display = "flex"
    element.setAttribute("aria-expanded", "true")
    currentlyOpenDropdown = elementDropdown
  }
}

function closeAll(){
  for(let i = 0; i < dropdownButtonsArray.length; i++){
    toggleOpen(dropdownButtonsArray[i], "close")
  }
}

document.onclick = function(event){
  const element = event.target

  if(element.classList[0] === "dropdown-button"){
    const elementDropdown = document.getElementById(element.getAttribute("aria-controls"))

    if(!currentlyOpenDropdown){ // If there is no dropdown opened, open the clicked on dropdown.
      toggleOpen(element, "open")

    }else if (currentlyOpenDropdown === elementDropdown){ //If the already opened dropdown is the same as the button clicked on, close it
      toggleOpen(element, "close")
      currentlyOpenDropdown = null

    }else{ // If a dropdown is currently open but you clicked on a different button, close others and open that new dropdown
      closeAll()
      toggleOpen(element, "open")
    }
    
  }else if(currentlyOpenDropdown){
    closeAll()
    currentlyOpenDropdown = null
    isNavOpen = false
  }
  
  // Mobile navigation toggler
  if(element.id === "mobile-cmds-toggle"){
    if (!isNavOpen){
      isNavOpen = true
      cmdsNav.classList.replace("closed-nav", "open-nav")
    }else{
      isNavOpen = false
      cmdsNav.classList.replace("open-nav", "closed-nav")
    }
    console.log(isNavOpen)
  }
}