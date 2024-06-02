export default class domManipulation {
  constructor () {
    this.notification = document.querySelector('.notification')
    this.startButton = document.querySelector('.start-button')
    this.computerBoard = document.querySelector('.computer .gameboard')
  }

  updateNotification (text) {
    this.notification.textContent = text
  }

  unblurComputerBoard () {
    this.startButton.style.display = 'none'
    this.computerBoard.style.filter = 'none'
    this.computerBoard.style.pointerEvents = 'auto'
  }
}
