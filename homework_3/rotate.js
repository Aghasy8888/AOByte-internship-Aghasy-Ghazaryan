import appendLines from "./helpers/appendLines.js";
import appendCells from "./helpers/appendCells.js";

export default function rotate(triangle) {
  triangle.classList.toggle("apexDown");
  appendLines();
  appendCells(triangle.classList.contains("apexDown"));
}
