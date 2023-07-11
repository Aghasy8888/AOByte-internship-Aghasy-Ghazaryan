export default function appendLines() {
  triangle.innerHTML = "";

  for (let i = 0; i < triangleLength.value; i++) {
    const line = document.createElement("div");
    line.className = "line";
    triangle.appendChild(line);
  }
}
