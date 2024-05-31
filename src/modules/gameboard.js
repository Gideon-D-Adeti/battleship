export default class Gameboard {
  constructor () {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null))
    this.missedAttacks = []
    this.ships = []
  }

  placeShip (ship, x, y, orientation) {
    // Check if the ship can be placed at the given coordinates
    for (let i = 0; i < ship.length; i++) {
      if (orientation === 'horizontal') {
        if (y + i >= 10 || this.board[x][y + i] !== null) {
          return false
        }
      } else if (orientation === 'vertical') {
        if (x + i >= 10 || this.board[x + i][y] !== null) {
          return false
        }
      }
    }

    // Place the ship
    for (let i = 0; i < ship.length; i++) {
      if (orientation === 'horizontal') {
        this.board[x][y + i] = ship
      } else if (orientation === 'vertical') {
        this.board[x + i][y] = ship
      }
    }
    this.ships.push(ship)
    return true
  }

  receiveAttack (x, y) {
    const target = this.board[x][y]
    if (target) {
      target.hit()
      return true
    } else {
      this.missedAttacks.push([x, y])
      return false
    }
  }

  areAllShipsSunk () {
    return this.ships.every((ship) => ship.isSunk())
  }
}
