// const user = {
//   name: "Vazgen",
//   age: 23,
//   city: "Yerevan",
//   isMaried: undefined,
//   isProgrammer: true,
//   // до ES6
//   printUserName: function () {
//     return `Hello ${this.name}`;
//   },

//   printInfoAboutUser() {
//     return `${this.name} is ${this.age} years old, ${
//       this.isProgrammer ? "He is progammer" : "He is not progammer"
//     }. ${this.name} lives in ${this.city}`;
//   },
// };

// const user2 = {
//   name: "Aleksei",
//   age: 33,
//   city: "Kiyev",
//   isMaried: false,
//   isProgrammer: false,
//   // до ES6
//   printUserName: function () {
//     return `Hello ${this.name}`;
//   },

//   printInfoAboutUser() {
//     return `${this.name} is ${this.age} years old, ${
//       this.isProgrammer ? "He is progammer" : "He is not progammer"
//     }. ${this.name} lives in ${this.city}`;
//   },
// };

// console.log(user.printUserName());
// console.log(user.printInfoAboutUser());
// console.log(user2.printInfoAboutUser());

// Методы объекта: call, apply, bind

// call  вызывает функцию с указанным контекстом и передает аргументы в виде отдельных параметров
// apply  вызывает функцию с указанным контекстом и передает аргументы в виде элементов массива
// bind вызвыает ункцию с указанным контекстом и передает аргументы. В результате формируется новая функция
// которую нужно вызвать и только там передать аргументы
// Когда хорошо использовать bind? Его лучше использовать когда мы не хотим сразу вызвыать данную функию

function printInfoAboutUser(status) {
  return `${this.name} is ${this.age} years old, ${
    this.isProgrammer ? "He is progammer" : "He is not progammer"
  }. ${this.name} lives in ${this.city}. ${
    status === "Не уважаемый" ? "he is bad guy" : "he is cool person"
  }`;
}

const user = {
  name: "Vazgen",
  age: 23,
  city: "Yerevan",
  isMaried: undefined,
  isProgrammer: true,
};

const user2 = {
  name: "Aleksei",
  age: 33,
  city: "Kiyev",
  isMaried: false,
  isProgrammer: false,
};

// Call
// console.log(printInfoAboutUser.call(user,'Не уважаемый')); // передаем фунцкии printInfoAboutUser контекст(значение) user
// console.log(printInfoAboutUser.call(user2)); // передаем фунцкии printInfoAboutUser контекст(значение) user2
// console.log(printInfoAboutUser(user)); // может работать только при выключенном режиме "use strict"

// Apply
// console.log(printInfoAboutUser.apply(user, ["Не уважаемый"]));

// Bind
// const presonInfo = printInfoAboutUser.bind(user);
// console.log(presonInfo("Уважаемый"));

// 1 надо перенести функцию в объект и попробовать сдлеать вызов данной фуннкции передав в нее значение из второго объекта
