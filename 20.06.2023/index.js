// // Написать класс Машина который имеет поля марка, прозивоство, цена, макс скорость мин скорост.
// // Методы разгона (+ 10) и снижение (-20), и метод ораброжение всей информации данного класа.
// // Создать Новый класс Toyota который будет наследоваться от класса Машина со всеми его полями

class Car {
  constructor({ name, madeIn, price, maxSpeed, minSpeed, speed }) {
    console.log({ name, madeIn, price, maxSpeed, minSpeed, speed });
    this.name = name;
    this.madeIn = madeIn;
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.minSpeed = minSpeed;
  }

  makeSpeed() {
    // this.speed = this.speed + 10;
    this.speed += 10;
  }

  makeLowSpeed() {
    this.speed -= 20;
  }

  showInfo() {
    return `${this.name} has been created in ${this.madeIn}.
     It's avg price in market is ${this.price}. Highest speed:
     ${this.maxSpeed} and lowest speed: ${this.minSpeed}.
     At this moment cars speed is ${this.speed}`;
  }
}

class Toyota extends Car {
  constructor({ name, madeIn, price, maxSpeed, minSpeed, speed }) {
    super({ name, madeIn, price, maxSpeed, minSpeed, speed });
  }
}

const camry = new Toyota({
  name: "Camry",
  maxSpeed: 200,
  madeIn: "Japan",
  minSpeed: 20,
  speed: 120,
  price: 45000,
});

camry.makeSpeed(); // +10
camry.makeSpeed(); // +10
camry.makeSpeed(); // +10
camry.makeSpeed(); // +10
camry.makeLowSpeed(); // -20
camry.makeLowSpeed(); // -20
camry.makeLowSpeed(); // -20
console.log(camry.showInfo());

// создать класс Animal который принемает имя вида животночо, вес
// Создать класс Cat на основе класса Animal
// Все делаем с помощью деструктуризации

class Animal {
  constructor({ type, weight }) {
    this.type = type;
    this.weight = weight;
  }
}

class Cat extends Animal {
  constructor({ type, weight }) {
    super({ type, weight });
  }
}
