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
      return new DivElement(attrs, children);

    case "span":
      return new SpanElement(attrs, children);

    case "ul":
      return new UlElement(attrs, children);

    case "li":
      return new LiElement(attrs, children);

    case "form":
      return new FormElement(attrs, children);

    case "label":
      return new LabelElement(attrs, children);

    case "br":
      return new BrElement(attrs, children);

    case "input":
      return new InputElement(attrs, children);

    default:
      return new DomElement(type, attrs, children);
  }
}
