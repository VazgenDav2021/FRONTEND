class Car {
  // Public Field
  locale = navigator.language;

  //   Private field in Class
  #location = "Saudi Arabia";

  constructor() {
    this._info = "this is secret Info";
    this.firstName = "Vazgen";
  }

  set changeLocation(newLocaiton) {
    this.#location = newLocaiton;
  }

  get returnLocation() {
    return this.#location;
  }

  get returnInfo() {
    return this._info;
  }

  set changeFirstName(newName) {
    this.firstName = newName;
  }
}

const toyota = new Car();

// console.log({ language: toyota.locale });
console.log("====================================");
console.log({ location: toyota.returnLocation });
console.log("====================================");
// console.log({ toyota: toyota.#location });

// На 19 строке используя сущность "get"  мы берем значение _info но тем временем ограждаем себя от вероятности изменнии данного свойства
// console.log(toyota.returnInfo); // нельзя напраямую обращятся к _info так как "_" означает нельзя взаимоедйстовать с данной сущностью напрямую

//  На 23 строке мы изменяем поле firstName чере сущность "set"

// Наисать класс "Univesitry" который как параметр принает название унивеситета, клочество студентов, количество преподователей, страну
// На основе класса Univesitry создать новый экземпляр "AmericanUniversities" и передать этому экземпляру значения
//  На основе класса "AmericanUniversities" создать экземпляр "Harvard" и передать в него значения государства которое наследуется от родителя, но остальные значения должны придти
// К классу "Harvard" добавить get и set, для того чтобы получить и поменять количество студентов
// Используя метод set написать метод в класс "Harvard" который вызывает метод set и уменьшает количество студентов на 10

// class University {
//   constructor(title, numOfStudents, numOfTeachers, country) {
//     this.title = title;
//     this.numOfStudents = numOfStudents;
//     this.numOfTeachers = numOfTeachers;
//     this.country = country;
//   }
// }

// class AmericanUniversities extends University {
//   constructor(title, numOfStudents, numOfTeachers, country) {
//     super(title, numOfStudents, numOfTeachers, country);
//   }
// }

// class Harvard extends AmericanUniversities {
//   constructor(title, numOfStudents, numOfTeachers, country) {
//     super();
//     this.country = country;
//     this.title = title;
//     this._numOfStudents = numOfStudents;
//     this.numOfTeachers = numOfTeachers;
//   }

//   get numOfStudents() {
//     return this._numOfStudents;
//   }

//   set numOfStudents(value) {
//     this._numOfStudents = value;
//   }

//   decreaseStudents() {
//     this.numOfStudents -= 10;
//   }
// }

// const harvard = new Harvard("Harvard", 2000, 230, "USA");

// harvard.decreaseStudents();
// console.log({ harvard });
