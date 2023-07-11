import render, { triangleLength, rotateButton, triangle } from "./render.js";
import rotate from "./rotate.js";

rotateButton.addEventListener("click", () => {
  rotate(triangle);
});

triangleLength.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    render();
  }
});
