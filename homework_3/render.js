import appendLines from "./helpers/appendLines.js";
import appendCells from "./helpers/appendCells.js";
import handleExceptions from "./helpers/handleExceptions.js";

export const triangleLength = document.getElementById("triangleLength");
export const rotateButton = document.getElementById("rotate");
export const triangle = document.getElementById("triangle");
export const validationMessage = document.querySelector(".validationMessage");

export default function render() {
  const triangleLengthValue = triangleLength.value;
  rotateButton.style.display = triangleLengthValue ? "block" : "none";

  if (triangleLengthValue > 28 || triangleLengthValue < 2) {
    handleExceptions();
    return;
  }

  validationMessage.style.display = "none";
  
  appendLines();
  appendCells(false);
}
