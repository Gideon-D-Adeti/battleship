export default function createGameboard (character) {
  const gridContainer = document.querySelector(`.${character} .gameboard`)

  // Create column labels
  const columnLabels = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  columnLabels.forEach((label) => {
    const labelDiv = document.createElement('div')
    labelDiv.textContent = label
    labelDiv.classList.add('cell', 'label')
    gridContainer.appendChild(labelDiv)
  })

  // Create rows
  for (let row = 1; row <= 10; row++) {
    // Create row label
    const rowLabelDiv = document.createElement('div')
    rowLabelDiv.textContent = row
    rowLabelDiv.classList.add('cell', 'label')
    gridContainer.appendChild(rowLabelDiv)

    // Create cells for the row
    for (let col = 1; col <= 10; col++) {
      const cellDiv = document.createElement('div')
      cellDiv.classList.add('cell')
      gridContainer.appendChild(cellDiv)
    }
  }
}
