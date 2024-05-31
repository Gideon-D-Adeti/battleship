import Player from './player'
import Ship from './ship'

export default function setupGame () {
  const player = new Player('Player')
  const computer = new Player('Computer')

  // Place ships on the player's board
  player.gameboard.placeShip(new Ship(5), 0, 0, 'horizontal') // Carrier
  player.gameboard.placeShip(new Ship(4), 2, 2, 'vertical') // Battleship
  player.gameboard.placeShip(new Ship(3), 5, 5, 'horizontal') // Cruiser
  player.gameboard.placeShip(new Ship(3), 7, 7, 'vertical') // Submarine
  player.gameboard.placeShip(new Ship(2), 9, 0, 'horizontal') // Destroyer

  // Place ships on the computer's board (for now, use fixed positions)
  computer.gameboard.placeShip(new Ship(5), 0, 0, 'horizontal') // Carrier
  computer.gameboard.placeShip(new Ship(4), 2, 2, 'vertical') // Battleship
  computer.gameboard.placeShip(new Ship(3), 5, 5, 'horizontal') // Cruiser
  computer.gameboard.placeShip(new Ship(3), 7, 7, 'vertical') // Submarine
  computer.gameboard.placeShip(new Ship(2), 9, 0, 'horizontal') // Destroyer

  // Return the initialized game state
  return {
    player,
    computer
  }
}
