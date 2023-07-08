import render from "./render.js";
import { triangleLength, rotateButton } from "./render.js";
import rotate from "./rotate.js";

rotateButton.addEventListener("click", () => {
  rotate();
});

triangleLength.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    render();
  }
});
