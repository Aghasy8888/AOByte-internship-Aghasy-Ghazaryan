export default function createAppendCells(i, cell, lines) {
  const asterisk = document.createElement('p');
  asterisk.innerText = '*';
  cell.className = 'cell';
  cell.appendChild(asterisk);
  lines[i].appendChild(cell);
}
