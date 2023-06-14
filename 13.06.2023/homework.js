// Создать 3 объекта в которых описаны компании(name, shortName,airBusAmmout).
// В одном из объектов создать метод, который принимает как параметры:
// 1. Имя пассажира
// 2. Номмер Билета
// В результате возвращает строку типо этого:
// {Имя клиента} использовала компанию {имя компании (делаем через контекст this)}, и у нее место {короткое имя компанни номер билета}
// Пример
//  {name} спользовала компанию {this.name}, и у нее место {{this.shortname} ticketNumber}

// <https://github.com/VazgenDav2021/FRONTEND> ссылка на ресурсы

const lufthansa = {
  name: "Lufthansa",
  shortName: "LH",
  // создаем массив для хранения пассажиров которые пользовались данной компанией
  passangers: [],
  // ES6+

  // создаем метод в боъекте lufthansa с 3я переменными которые в него передаеются в качестве параметров
  insertNewPassanger(clientName, ticketNumber, gender) {
    // когда у нас вызывается данный метод в массив passangers добавляем инфомрацию о новом пассажире
    this.passangers.push({
      clientName,
      seatNumber: `${this.shortName}:${ticketNumber}`,
      gender: gender === "M" ? "Male" : "Female",
    });
    console.log(
      `${clientName} ${
        gender === "M" ? "использовал" : "использовала"
      } компанию ${this.name}, и у ${gender === "M" ? "него" : "неё"} место ${
        this.shortName
      }:${ticketNumber} `
    );
  },
};

// const vazgenBook = lufthansa.insertNewPassanger("Vazgen", 222, "M");
// const cholpon = lufthansa.insertNewPassanger("Cholpon", 122, "F");
// console.log({ lufthansa: lufthansa.passangers });

const flyEmirates = {
  name: "Fly Emirates",
  shortName: "FE",
  passangers: [],
};

// Здесь мы в переменной bookFunction храним метод из lufthansa под название insertNewPassanger. НЕ ВЫЗЫВАЕМ insertNewPassanger!!!!!!
const bookFunction = lufthansa.insertNewPassanger();
// первым аргументом передаем контекст для использования его значений (name: "Fly Emirates", shortName: "FE",). После превого параметра задаем параметры метода
const alexei = bookFunction.call(flyEmirates, "Alexei", 10, "M");
// Здесь все по аналогии, просто парамтры для метода insertNewPassanger передаются в качестве массива
const dmitriy = bookFunction.apply(flyEmirates, ["Dmitriy", 99, "M"]);
// // 1ый вариант
// Здесь мы сохраняем результат через bind, сразу передовая параметры в метод insertNewPassanger
// const hanna = bookFunction.bind(flyEmirates, "Hanna", 1, "F"); // можно писать аргументы сразу в методе bind
// hanna(); // потом просты вызвать метод
// 2ой вариант
// Здесь мы bind-им метод и просто передаем контекст. В результате у нас образуется новая функция под названием hanna
const hanna = bookFunction.bind(flyEmirates); // просто задаем контекст
// Здесь мы вызываем данную функцию и уже передаем параметры в метдо insertNewPassanger
hanna("Hanna", 1, "F"); // здесь только задаем параметры для метода insertNewPassanger

const flyArna = {
  name: "Fly Arna",
  shortName: "FA",
  passangers: [],
};
