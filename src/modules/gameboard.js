export default class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(ship, x, y, orientation) {
    if (orientation === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x + i][y] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];
    if (target) {
      target.hit();
    } else {
      this.missedAttacks.push([x, y]);
    }
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
