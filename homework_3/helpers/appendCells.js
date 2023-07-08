export default function appendCells(apexDown) {
  const lines = document.querySelectorAll(".line");

  function createAppendCells(i, cell) {
    const asterisk = document.createElement("p");
    asterisk.innerText = "*";
    cell.className = "cell";
    cell.appendChild(asterisk);
    lines[i].appendChild(cell);
  }

  if (apexDown) {
    for (let i = 0; i < lines.length; i++) {
      for (let j = lines.length; j > i; j--) {
        const cell = document.createElement("div");
        createAppendCells(i, cell);
      }
    }
  } else {
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j <= i; j++) {
        const cell = document.createElement("div");
        createAppendCells(i, cell);
      }
    }
  }
}
