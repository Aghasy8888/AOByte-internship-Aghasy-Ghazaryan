import drawInDraw from "./drawInDraw.js";

export default class DomElement {
  constructor(type, attrs, children) {
    this.type = type;
    this.attrs = attrs;
    this.children = children;
  }

  draw() {
    const element = document.createElement(this.type);
    drawInDraw.apply(this, [element]);
    return element;
  }
}

export class DivElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const div = document.createElement("div");
    drawInDraw.apply(this, [div]);
    return div;
  }
}

export class SpanElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const span = document.createElement("span");
    drawInDraw.apply(this, [span]);
    return span;
  }
}

export class UlElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const ul = document.createElement("ul");
    drawInDraw.apply(this, [ul]);
    return ul;
  }
}

export class LiElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const li = document.createElement("li");
    drawInDraw.apply(this, [li]);
    return li;
  }
}

export class InputElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const input = document.createElement("input");
    drawInDraw.apply(this, [input]);
    return input;
  }
}

export class BrElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const br = document.createElement("br");
    drawInDraw.apply(this, [br]);
    return br;
  }
}

export class LabelElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const label = document.createElement("label");
    drawInDraw.apply(this, [label]);
    return label;
  }
}

export class FormElement extends DomElement {
  constructor(attrs, children) {
    super(null, attrs, children);
  }

  draw() {
    const form = document.createElement("form");
    drawInDraw.apply(this, [form]);
    return form;
  }
}
