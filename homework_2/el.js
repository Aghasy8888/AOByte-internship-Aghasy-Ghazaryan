import DomElement from "./domElements.js";
import {
  DivElement,
  SpanElement,
  UlElement,
  LiElement,
  InputElement,
  BrElement,
  LabelElement,
  FormElement,
} from "./domElements.js";

export default function el(type, attrs, children) {
  switch (type) {
    case "div":
      return new DivElement(type, attrs, children);

    case "span":
      return new SpanElement(type, attrs, children);

    case "ul":
      return new UlElement(type, attrs, children);

    case "li":
      return new LiElement(type, attrs, children);

    case "form":
      return new FormElement(type, attrs, children);

    case "label":
      return new LabelElement(type, attrs, children);

    case "br":
      return new BrElement(type, attrs, children);

    case "input":
      return new InputElement(type, attrs, children);

    default:
      return new DomElement(type, attrs, children);
  }
}
