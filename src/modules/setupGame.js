import Player from './player'
import Ship from './ship'

export default function setupGame () {
  const player = new Player('player')
  const computer = new Player('computer')

  const carrier = new Ship(5)
  const battleship = new Ship(4)
  const cruiser = new Ship(3)
  const submarine = new Ship(3)
  const destroyer = new Ship(2)

  // Place ships on the player's board
  player.gameboard.placeShip(carrier, 0, 0, 'horizontal')
  player.gameboard.placeShip(battleship, 2, 2, 'vertical')
  player.gameboard.placeShip(cruiser, 5, 5, 'horizontal')
  player.gameboard.placeShip(submarine, 7, 7, 'vertical')
  player.gameboard.placeShip(destroyer, 9, 0, 'horizontal')

  // Place ships on the computer's board (for now, use fixed positions)
  computer.gameboard.placeShip(carrier, 3, 3, 'horizontal')
  computer.gameboard.placeShip(battleship, 4, 1, 'vertical')
  computer.gameboard.placeShip(cruiser, 7, 7, 'horizontal')
  computer.gameboard.placeShip(submarine, 5, 4, 'vertical')
  computer.gameboard.placeShip(destroyer, 1, 2, 'horizontal')

  // Return the initialized game state
  return {
    player,
    computer
  }
}
