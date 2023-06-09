const user = {
  name: "Vazgen",
  age: 23,
  city: "Yerevan",
  isMaried: undefined,
  isProgrammer: true,

  printInfoAboutUser(status) {
    return `${this.name} is ${this.age} years old, ${
      this.isProgrammer ? "He is progammer" : "He is not progammer"
    }. ${this.name} lives in ${this.city}. ${
      status === "Не уважаемый" ? "he is bad guy" : "he is cool person"
    }`;
  },
};

const user2 = {
  name: "Aleksei",
  age: 33,
  city: "Kiyev",
  isMaried: false,
  isProgrammer: false,
};

// здесь не вызываем фуннкцию а просто храним тело функции в другой переменой
const printInfo = user.printInfoAboutUser;

// здесь вызываем функцию подтставлая контекст и параметр("Не уважаемый")
console.log(printInfo.call(user2, "Не уважаемый"));
console.log(printInfo.apply(user2, [""]));
const bindIfo = printInfo.bind(user2);
console.log(bindIfo(""));
