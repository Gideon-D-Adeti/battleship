import './index.css'
import setupGame from './modules/setupGame'
import createGameboard from './modules/createGameboard'
import renderShips from './modules/renderShips'

document.addEventListener('DOMContentLoaded', () => {
  const { player, computer } = setupGame()

  createGameboard('player')
  createGameboard('computer')

  renderShips(player)
  // renderGameboard(computer)
})
