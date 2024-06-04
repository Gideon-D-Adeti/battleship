import Gameboard from './gameboard'

export default class Player {
  constructor (name) {
    this.name = name
    this.gameboard = new Gameboard()
    this.board = document.querySelector(`.${this.name} .gameboard`)
  }

  attack (opponent, x, y) {
    return opponent.gameboard.receiveAttack(x, y)
  }

  renderBoard () {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = this.board.querySelector(
          `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
        )
        if (this.gameboard.board[x][y] !== null) {
          if (this.name !== 'computer') {
            cell.classList.add(`${this.name}-ship`)
          }
        }
      }
    }
  }
}
