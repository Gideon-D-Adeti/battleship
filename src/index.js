import './index.css'
import createGameboard from './modules/createGameboard'

document.addEventListener('DOMContentLoaded', () => {
  createGameboard('player')
  createGameboard('computer')
})
