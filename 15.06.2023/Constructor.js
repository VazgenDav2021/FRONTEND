// Конструктор User, который принемает 3 параметра при каждом вызове
function User(name, age, password) {
  // 4 - 6 строчку мы присваеваем ключам this.name и тд значение, которые пришли в качетстве параметра
  this.name = name;
  this.age = age;
  this.password = password;

  // здесь мы написали метод внутри конструкотра. Это делать неправилльно,
  // Поскольку этот метод создается при каждом вызвое данного конструктора
  //   this.infoAboutUser = function () {
  //     return `${this.name} is ${this.age} years old. And is password is ${this.password}`;
  //   };
}

// Для создания метода конструктора надо использовать {Имя конструктора}.prototype.{Имя метода} = {тот метод который мы хотим описать}
User.prototype.infoAboutUser = function () {
  return `${this.name} is ${this.age} years old. And is password is ${this.password}`;
};
// let vazgen = new User("Vazgen", 23, "QWERTY123");
// let alexei = new User("Alexei", 25, "QWERTY1234");
// console.log({ vazgen, alexei });
// console.log(vazgen.infoAboutUser());

// Что происходит когда мы вызываем конструкто через ключевое слово "new"
// 1. Новый объект создается
// 2. Новый объект котрый был создан конструктором ссылается на прототип (объект vazgen может использовар прототип User.prototype.infoAboutUser)
// 3. Функция сразу возвращает объект (в конструкторе негде не писали " retutn", он автоматом вернул все значения)

// Здесь мы создали новый метод массива sumAllValues. Как метод map был создан до нас
// Array.prototype.sumAllValues = function () {
//   return this.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
// };

// const arr = [1, 2, 3, 4];
// console.log(arr.sumAllValues()); // 10
// console.log([3, 6, 9, 12].sumAllValues()); //30

// 1. Создать конструктор Car с полями name, speed.
// 2. Скосрость это текущая скорость машины
// 3. Написать метод acclereate который будет увеличывать скорость машины  на 10 км/ч
// 4.  Написать метод brake который будет уменьшать скорость машины на 5км/час
// 5. Создать 2 объекта машины и применить методы acclereate и brake.

function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.acclereate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const bmw = new Car("MBW", 100);
bmw.acclereate();
bmw.acclereate();
bmw.acclereate();
bmw.acclereate();
bmw.acclereate();
console.log({ bmw });
bmw.brake();
bmw.brake();
bmw.brake();
console.log({ bmw });
