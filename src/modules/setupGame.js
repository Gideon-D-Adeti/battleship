import Player from './player'
import Ship from './ship'

export default function setupGame () {
  const player = new Player('player')
  const computer = new Player('computer')

  // Create player ships
  const playerCarrier = new Ship(5)
  const playerBattleship = new Ship(4)
  const playerCruiser = new Ship(3)
  const playerSubmarine = new Ship(3)
  const playerDestroyer = new Ship(2)

  // Place ships on the player's board
  player.gameboard.placeShip(playerCarrier, 0, 0, 'horizontal')
  player.gameboard.placeShip(playerBattleship, 2, 2, 'vertical')
  player.gameboard.placeShip(playerCruiser, 5, 5, 'horizontal')
  player.gameboard.placeShip(playerSubmarine, 7, 7, 'vertical')
  player.gameboard.placeShip(playerDestroyer, 9, 0, 'horizontal')

  // Create computer ships
  const computerCarrier = new Ship(5)
  const computerBattleship = new Ship(4)
  const computerCruiser = new Ship(3)
  const computerSubmarine = new Ship(3)
  const computerDestroyer = new Ship(2)

  // Place ships on the computer's board (for now, use fixed positions)
  computer.gameboard.placeShip(computerCarrier, 3, 3, 'horizontal')
  computer.gameboard.placeShip(computerBattleship, 4, 1, 'vertical')
  computer.gameboard.placeShip(computerCruiser, 7, 7, 'horizontal')
  computer.gameboard.placeShip(computerSubmarine, 5, 4, 'vertical')
  computer.gameboard.placeShip(computerDestroyer, 1, 2, 'horizontal')

  // Return the initialized game state
  return {
    player,
    computer
  }
}
