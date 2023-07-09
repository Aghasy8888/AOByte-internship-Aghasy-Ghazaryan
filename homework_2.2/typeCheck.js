import DomElement from "./domElements.js";

export default function typeCheck(element) {
  if (element instanceof DomElement) {
    return "DomElement";
  } else if (Array.isArray(element)) {
    return "array";
  } else {
    return "string";
  }
}
