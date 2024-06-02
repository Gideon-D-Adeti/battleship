import './index.css'
import setupGame from './modules/setupGame'
import domManipulation from './modules/domM'

const dom = new domManipulation()

document.addEventListener('DOMContentLoaded', () => {
  const { player, computer } = setupGame()

  player.createBoard()
  computer.createBoard()

  player.renderBoard()
  computer.renderBoard()

  dom.startButton.addEventListener('click', () => {
    startGame(player, computer)
  })
})

function startGame (player, computer) {
  dom.unblurComputerBoard()

  // Initialize random starter
  const starter = Math.random() > 0.5 ? 'player' : 'computer'

  if (starter === 'player') {
    dom.updateNotification('The game started, your turn.')
  } else {
    dom.updateNotification("The game started, computer's turn.")
  }
}
