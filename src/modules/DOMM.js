export default class DOMManipulation {
  constructor () {
    this.notification = document.querySelector('.notification')
    this.startButton = document.querySelector('.start-button')
    this.computerBoard = document.querySelector('.computer .gameboard')
    this.playerBoard = document.querySelector('.player .gameboard')
  }

  updateNotification (text) {
    this.notification.textContent = text
  }

  unblurComputerBoard () {
    this.startButton.style.display = 'none'
    this.computerBoard.style.filter = 'none'
    this.computerBoard.style.pointerEvents = 'auto'
  }

  getCellFromCoordinates (x, y, boardType) {
    return document.querySelector(
      `.${boardType} .gameboard .cell[data-row="${x + 1}"][data-col="${y + 1}"]`
    )
  }

  renderPlayerBoard (player) {
    const board = document.querySelector('.player .gameboard')

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = board.querySelector(
          `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
        )
        if (player.gameboard.board[x][y] !== null) {
          cell.classList.add('player-ship')
        }
      }
    }
  }
}
