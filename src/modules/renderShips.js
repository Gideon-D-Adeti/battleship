export default function renderShips (character) {
  const characterName = character.name.toLowerCase()
  const board = document.querySelector(`.${characterName} .gameboard`)

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const cell = board.querySelector(
        `.cell[data-row="${x + 1}"][data-col="${y + 1}"]`
      )
      if (character.gameboard.board[x][y] !== null) {
        cell.classList.add('ship')
      }
    }
  }
}
