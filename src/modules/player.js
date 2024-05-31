import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  attack(enemyBoard, x, y) {
    enemyBoard.receiveAttack(x, y);
  }
}
