import './index.css'
import setupGame from './modules/setupGame'

document.addEventListener('DOMContentLoaded', () => {
  const { player, computer } = setupGame()

  player.createBoard()
  computer.createBoard()

  player.renderBoard()
  computer.renderBoard()
})
