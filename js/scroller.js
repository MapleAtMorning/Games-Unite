const sidebar = document.getElementById('sidebarContent')
const openedCanvas = new bootstrap.Offcanvas(sidebar)
let timeDelay

function scrollFunc (id) {
  const vw = window.innerWidth
  const element = document.getElementById(id)

  if (vw < 992) {
    openedCanvas.hide()
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
