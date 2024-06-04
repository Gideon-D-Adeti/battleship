import './index.css'
import setupGame from './modules/setupGame'
import DOMManipulation from './modules/DOMM'
import createBoards from './modules/createBoards'

const DOMM = new DOMManipulation()
let currentPlayer

document.addEventListener('DOMContentLoaded', () => {
  createBoards()

  const { player, computer } = setupGame()

  player.renderBoard()
  computer.renderBoard()

  DOMM.startButton.addEventListener('click', () => {
    startGame(player, computer)
  })
})

function startGame (player, computer) {
  DOMM.unblurComputerBoard()

  // Initialize random starter
  currentPlayer = Math.random() > 0.5 ? 'player' : 'computer'

  if (currentPlayer === 'player') {
    DOMM.updateNotification('The game started, your turn.')
  } else {
    DOMM.updateNotification("The game started, computer's turn.")
    setTimeout(
      () => handleComputerTurn(player, computer),
      Math.floor(Math.random() * 6) * 1000
    )
  }

  // Event listener for player attacks
  DOMM.computerBoard.addEventListener('click', (event) => {
    if (currentPlayer === 'player') {
      const cell = event.target
      if (
        cell.classList.contains('cell') &&
        !cell.classList.contains('attacked')
      ) {
        const x = parseInt(cell.dataset.row, 10) - 1
        const y = parseInt(cell.dataset.col, 10) - 1
        const hit = player.attack(computer, x, y)
        cell.classList.add('attacked', hit ? 'hit' : 'miss')
        if (computer.gameboard.areAllShipsSunk()) {
          DOMM.updateNotification('You won!')
        } else {
          currentPlayer = 'computer'
          DOMM.updateNotification("Computer's turn.")
          setTimeout(
            () => handleComputerTurn(player, computer),
            Math.floor(Math.random() * 6) * 1000
          )
        }
      }
    }
  })
}

function handleComputerTurn (player, computer) {
  
}
