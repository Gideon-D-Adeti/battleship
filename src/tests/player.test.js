import Player from '../modules/player'
import Gameboard from '../modules/gameboard'

test('Player can attack enemy gameboard', () => {
  const player = new Player()
  const enemyBoard = new Gameboard()
  player.attack(enemyBoard, 0, 0)
  expect(enemyBoard.missedAttacks).toContainEqual([0, 0])
})
