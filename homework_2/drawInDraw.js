import typeCheck from "./typeCheck.js";

export default function drawInDraw(element) {
  switch (typeCheck(this.children)) {
    case "DomElement":
      element.appendChild(this.children.draw());
      break;
    case "array":
      this.children.forEach((child) => {
        element.appendChild(child.draw());
      });
      break;
    case "string":
      element.innerText = this.children;
      break;
    default:
      break;
  }
  for (const attr in this.attrs) {
    element.setAttribute(attr, this.attrs[attr]);
  }
}
