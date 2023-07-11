import { rotateButton, validationMessage } from "../render.js";

export default function handleExceptions() {
  validationMessage.style.display = "block";
  validationMessage.innerText = "Please input length in 2-28 interval";
  triangle.innerHTML = "";
  rotateButton.style.display = "none";
}
