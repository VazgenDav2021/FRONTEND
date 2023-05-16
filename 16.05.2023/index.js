// Как бы делали без функции
// let num1 = 5;
// let num2 = 5;
// let sum = num1 + num2;
// console.log({ sum });

// let num3 = 7;
// let num4 = 2;
// let sum2 = num3 + num4;
// console.log({ sum2 });

// // Как можно решить с помощю функции
// function sum(num1, num2) {
//   const sum = num1 + num2;
//   return sum; // return обязательно если хотире получить результат
// }
// console.log(sum(5, 5));

// let num3 = 2;
// let num4 = 7;
// console.log(sum(num3, num4));

// Не изпользуем return
// function sum(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
// }
// const reuslt = sum(5, 5);
// console.log({ reuslt });
// let num3 = 2;
// let num4 = 7;
// sum(num3, num4);

// // хранение результат в новоую переменную
// function calcAge(year) {
//   return 2023 - year;
// }

// const vazgenAge = calcAge(2000); // вызвали calcAge, с параметром 2000, получили результат 23 и прицвоили
// // к пременной vazgenAge
// console.log({ vazgenAge });

// const denisAge = calcAge(1999);
// console.log({ denisAge });

// Термниналогия и теория
// Сколько раз вызываем функцию столько раз отрабатывает тело функции
// 1 Создание - Инициализация (49 инициализируем функцию)
// 2 Аргумент(Параметр) - это те значение которые принимает функци (year)
// function calcAge(year) {
//   // Все что находится внутри фигурных скобках называется "телом фунцкии"
//   // Тело функции вызывается столько раз сколько мы вызвали фунцкию
//   console.log("Hello");
//   console.log("Hell2");
//   console.log("Hell3");
//   console.log("Hell4");
//   console.log("Hell5");
//   // на 60ой строке мы возвращем определенное значение
//   return 2023 - year;
//   // После ключевого слово return нечего не работает
//   let string = "text";
//   console.log(string);
//   console.log("Hell7");
//   console.log("Hell8");
// }

// const vazgenAge = calcAge(2000);
// console.log({ vazgenAge });

// const denisAge = calcAge(1999);
// console.log(denisAge);

// Написать функцию, которая принимает 2 аргумента, превый это имя, второй это фамилия.
//  В результате возвращается текст:  Привет {имя} {фамилия}

// 1
// function greeting(firsName, lastName) {
//   return "Привет " + firsName + lastName;
// }
// console.log(greeting("Vazgen", " Davtyan"));

// // 2
// function greeting(firsName, lastName) {
//   return "Привет " + firsName + " " + lastName;
// }
// console.log(greeting("Vazgen", "Davtyan"));

// // 3
// function greeting(firsName, lastName) {
//   return "Привет" + " " + firsName + " " + lastName;
// }
// console.log(greeting("Vazgen", "Davtyan"));

// 4
// function greeting(firsName, lastName) {
//   return `Привет ${firsName} ${lastName}`;
// }

// console.log(greeting("Vazgen", "Davtyan"));

// 5
// function greeting(firsName, lastName) {
//   let result = `Привет ${firsName} ${lastName}`;
//   return result;
// }

// console.log(greeting("Vazgen", "Davtyan"));

// 6 *
// function greeting(firsName, lastName) {
//    // Здесь используем конкатенацию
//   let result = `Привет ${firsName} ${lastName}`;
//   return result;
// }
// const helloVazgen = greeting("Vazgen", "Davtyan");
// console.log(helloVazgen);
// console.log({ helloVazgen });

// Несколько типов данных

// function communication(communicationType, firsName, lastName) {
//   return `${communicationType} ${firsName} ${lastName}`;
// }
// console.log(communication("Привет", "Vazgen", "Davtyan"));
// console.log(communication("Пока", "Olga", "Yakovleva"));
// console.log(communication("Доброе утро", "Jhon", "Smith"));

// Написасть функцию которая принимает 2 аргумета, первый это имя, второй это год рождения. Результат возвращает
// {год рождения} назад родился {имя}
// Тестовые данные ("Vazgen",2000) => 23 года назад родился Vazgen

// 1
// function ageBorn(name, year) {
//   return `${2023 - year} года назад родился ${name}`;
// }
// console.log(ageBorn("Vazgen", 2000));

// 2
// function ageBorn(name, year) {
//   let ageOfPerson = 2023 - year;
//   return `${ageOfPerson} года назад родился ${name}`;
// }
// console.log(ageBorn("Vazgen", 2000));
// console.log(ageBorn("Anna", 2000));

// Проверка на пол
// function ageBorn(name, year, gender) {
//   let ageOfPerson = 2023 - year;

//   if (gender === "M") {
//     return `${ageOfPerson} года назад родился ${name}`;
//   } else {
//     return `${ageOfPerson} года назад родилась ${name}`;
//   }
// }

// console.log(ageBorn("Vazgen", 2000, "M"));
// console.log(ageBorn("Olga", 2005, "F"));
// console.log(ageBorn("Olga", 2005, "K"));

// Более правельная проверка

// function ageBorn(name, year, gender) {
//   let ageOfPerson = 2023 - year;
//   if (gender === "M") {
//     return `${ageOfPerson} года назад родился ${name}`;
//   }
//   if (gender === "F") {
//     return `${ageOfPerson} года назад родилась ${name}`;
//   } else {
//     return `Такого пола нет`;
//   }
// }

// console.log(ageBorn("Vazgen", 2000, "M"));
// console.log(ageBorn("Olga", 2005, "F"));
// console.log(ageBorn("Olga", 2005, "K"));
// console.log(ageBorn("Olga", 2005, "I"));
// console.log(ageBorn("Olga", 2005, "O"));

// Написать фунцию расчета заработной платы. 1ый аргумент имя, 2ой количсетва зарплат(число).
// {имя} должен получить на руки {зарплата - налог}
// Условие 1: Если зарплата 20.000 и до 30.000 налог составляет 10%
// Условие 2: Если зарплата 30.000 и до 50.000 налог составляет 15%
// Условие 3: Если зарплата больше 50.000 налог 20%
// Условие 4: В любоме ином случае налог 5%

// function calcSalary(name, income) {
//   if (income >= 20000 && income < 30000) {
//     return `${name} должен получтиь на руки ${income * 0.9}`;
//   } else if (income >= 30000 && income < 50000) {
//     return `${name} должен получтиь на руки ${income * 0.85}`;
//   } else if (income >= 50000) {
//     return `${name} должен получтиь на руки ${income * 0.8}`;
//   } else {
//     return `${name} должен получтиь на руки ${income * 0.95}`;
//   }
// }

// function calcSalary(name, income) {
//   let tax;
//   if (income >= 20000 && income < 30000) {
//     tax = income * 0.9;
//     return `${name} должен получтиь на руки ${tax}`;
//   } else if (income >= 30000 && income < 50000) {
//     tax = income * 0.85;
//     return `${name} должен получтиь на руки ${tax}`;
//   } else if (income >= 50000) {
//     tax = income * 0.8;
//     return `${name} должен получтиь на руки ${tax}`;
//   } else {
//     tax = income * 0.95;
//     return `${name} должен получтиь на руки ${tax}`;
//   }
// }

// const vazgensSalary = calcSalary("Vazgen", 25000);
// const andreysSalary = calcSalary("Andrey", 30000);
// const cholponsSalary = calcSalary("Cholpon", 50000);
// const dmitrysSalary = calcSalary("Dmitriy", 52000);
// const annasSalary = calcSalary("Anna", 10000);

// console.log({
//   vazgensSalary,
//   andreysSalary,
//   cholponsSalary,
//   dmitrysSalary,
//   annasSalary,
// });
//
//
// Типы функции

// function decloration
// function calcAge(year) {
//   return 2023 - year;
// }

// // function expression
// let calcAge = function (year) {
//   return 2023 - year;
// };

// // Arrow function
// const calcAge = (yaer) => {
//   return 2023 - year;
// };

// Отличие
// 1. Arrow Function ES6
// 2. function decloration можно вызывать функцию до ее инициализации
// 3. Arrow function  нету динамичного параметр arguments

// Аргументы

// 1 Смотреть сколько аргументов получает функция
// console.log(
//   greeting("Вазген", "Давтян", 2000, 2000, 2000, 2000, 2000, 2000, 2000)
// );
// function greeting(firsName, lastName) {
//   return `Привет ${firsName} ${lastName}`;
// }

// 2 Если аргументов 3 а мы задали 2, то последний будет undefined
// function greeting(firsName, lastName, age) {
//   // age = undefined
//   return `Привет ${firsName} ${lastName} ${age}`;
// }

// console.log(greeting("Вазген", "Давтян"));

// 3 динамичный параметр arguments
// function greeting() {
//   return arguments;
// }
// console.log(greeting("Вазген", "Давтян", 2000, "Lecturer"));

// Нельза
// const greeting = () => {
//   return arguments;
// };

// console.log(greeting("Вазген", "Давтян", 2000, "Lecturer"));
