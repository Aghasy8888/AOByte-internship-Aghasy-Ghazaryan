import createAppendCells from './createAppendCells.js';

export default function appendCells(apexDown) {
  const lines = document.querySelectorAll('.line');

  if (apexDown) {
    for (let i = 0; i < lines.length; i++) {
      for (let j = lines.length; j > i; j--) {
        const cell = document.createElement('div');
        createAppendCells(i, cell, lines);
      }
    }
  } else {
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j <= i; j++) {
        const cell = document.createElement('div');
        createAppendCells(i, cell, lines);
      }
    }
  }
}
