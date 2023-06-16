class UserCL {
  // если ключ начинается с ниженго подчеркивания нельзя брат его напрямую
  // для этого есть методы getter с помощю которого берется даная сущность
  constructor(name, age, password) {
    this._name = name;
    this.age = age;
    this.password = password;
  }

  get nameInfo() {
    return this._name;
  }

  set nameInfo(newName) {
    return (this._name = newName);
  }

  infoAboutUser() {
    return `${this.name} is ${this.age} years old. And is password is ${this.password}`;
  }
}

const vazgen = new UserCL("Vazgen", 23, "QWERTY123");
console.log({ vazgen: vazgen.nameInfo }); // Vazgen
vazgen.nameInfo = "Alexandr";
console.log({ vazgen: vazgen.nameInfo }); // Alexandr

class Component {
  constructor({ tagName, size, backgroundColor, isCircle }) {
    this.el = document.createElement(tagName);
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.isCircle = isCircle;
  }

  hide() {
    this.el.style.display = "none";
  }

  show() {
    document.body.append(this.el);
    this.el.style.display = "block";
    this.el.style.width = this.size;
    this.el.style.height = this.size;
    this.el.style.backgroundColor = this.backgroundColor;
    if (this.isCircle) {
      this.el.style.borderRadius = "50%";
    }
  }
}

const box1 = new Component({
  tagName: "div",
  size: "100px",
  isCircle: false,
  backgroundColor: "red",
});

const box2 = new Component({
  tagName: "span",
  size: "500px",
  isCircle: true,
  backgroundColor: "blue",
});

const box3 = new Component({
  tagName: "section",
  size: "200px",
  isCircle: true,
  backgroundColor: "green",
});

box1.show();
box2.show();
box3.show();
