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

  createBoard () {
    // Create column labels
    const columnLabels = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    columnLabels.forEach((label) => {
      const labelDiv = document.createElement('div')
      labelDiv.textContent = label
      labelDiv.classList.add('cell', 'label')
      this.board.appendChild(labelDiv)
    })

    // Create rows
    for (let row = 1; row <= 10; row++) {
      // Create row label
      const rowLabelDiv = document.createElement('div')
      rowLabelDiv.textContent = row
      rowLabelDiv.classList.add('cell', 'label')
      this.board.appendChild(rowLabelDiv)

      // Create cells for the row
      for (let col = 1; col <= 10; col++) {
        const cellDiv = document.createElement('div')
        cellDiv.classList.add('cell')
        cellDiv.dataset.row = row
        cellDiv.dataset.col = col
        this.board.appendChild(cellDiv)
      }
    }
  }

  renderBoard () {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = this.board.querySelector(
          `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
        )
        if (this.gameboard.board[x][y] !== null) {
          cell.classList.add(`${this.name}-ship`)
        }
      }
    }
  }
}
