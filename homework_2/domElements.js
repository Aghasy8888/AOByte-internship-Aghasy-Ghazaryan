import typeCheck from "./typeCheck.js";

export default class DomElement {
  constructor(type, attrs, children) {
    this.type = type;
    this.attrs = attrs;
    this.children = children;
  }

  draw() {
    const element = document.createElement(this.type);
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
    return element;
  }
}

export class DivElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class SpanElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class UlElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class LiElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class InputElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class BrElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class LabelElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}

export class FormElement extends DomElement {
  constructor(type, attrs, children) {
    super(type, attrs, children);
  }
}
