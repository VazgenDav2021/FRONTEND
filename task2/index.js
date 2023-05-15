// // var VS let VS conts
// //Означает что при вызове переменной обявленной через var
// // до ее инициализации выедет undefined
// // console.log(number);
// var number = 5;
// number = 6;
// // console.log(number);

// // Cannot access 'number1' before initialization. Означает что при вызове переменной обявленной через let
// // до ее инициализации выедет ошибку
// // console.log(number1);
// let number1 = 10;
// number1 = 22;
// console.log(number1);

// const number2 = 10;
// number2 = 22;
// // Assignment to constant variable. Означает что это константая переменная
// console.log(number2);

// Primitives
// 1. Number
// 2. String
// 3. Boolean
// 4. undefined
// 5. NaN

// const number = 1;
// const number2 = Number("2"); // Number, принимает аргумент и пытается его трансформировать в число
// const number3 = Number(false); // Number, принимает аргумент и пытается его трансформировать в число
// const number4 = Number(true); // Number, принимает аргумент и пытается его трансформировать в число
// console.log(number, number2, number3, number4);

// const string = "abc";
// const string2 = String(1234); //String, принимает аргумент и пытается его трансформировать в строку
// const string3 = String(true); //String, принимает аргумент и пытается его трансформировать в строку
// const string4 = String(false); //String, принимает аргумент и пытается его трансформировать в строку
// console.log(string, string2, string3, string4);

// const isTrue = true;
// const isFalse = false;
// const emptyString = Boolean(""); //Boolean, принимает аргумент и пытается его трансформировать в значение булево
// const spaceBoolean = Boolean(" "); //Boolean, принимает аргумент и пытается его трансформировать в значение булево
// const filledText = Boolean("asdasd"); //Boolean, принимает аргумент и пытается его трансформировать в значение булево
// const zero = Boolean(0); //Boolean, принимает аргумент и пытается его трансформировать в значение булево
// const one = Boolean(1); //Boolean, принимает аргумент и пытается его трансформировать в значение булево
// const minusOne = Boolean(-100); //Boolean, принимает аргумент и пытается его трансформировать в значение булево
// // Любое число кроме 0 и -0 выдает true
// const minZero = Boolean(-0);
// const emptyObject = Boolean({});
// const objectArray = Boolean([]);
// const undefinedBoolean = Boolean(undefined);
// const NanBoolean = Boolean(NaN);

// console.log({
//   isTrue,
//   isFalse,
//   emptyString,
//   spaceBoolean,
//   filledText,
//   zero,
//   one,
//   minusOne,
//   minZero,
//   emptyObject,
//   objectArray,
//   lengthOfArray: [].length,
//   undefinedBoolean,
//   NanBoolean,
// });

// let myname;
// console.log({ myname }); // undefined та переменная которую мы создали но не дали значение
// myname = "Vazgen";
// console.log({ myname });

// NaN - Not a Number (не число), создается когда мы пытамеся сдлеать мат, операцию с теми величинами с которыми нельза
// console.log(1 * "l");
// console.log("qwerty" - 1);
// console.log(1 - "adss");

// // Маленькое отсупление
// console.log(1213 + "1"); // Число + Строку => соеденние двух величин
// console.log("1" + 1234); // Число + Строку => соеденние двух величин
// console.log(123 - "1"); // Если отнимаем то компилятор пытается строку переобразовать в число
// console.log("123" - 1); // Если отнимаем то компилятор пытается строку переобразовать в число
// console.log("123" * 2);
// console.log(2 * "1232");
// console.log("123" / 2);
// console.log(2 / "1232");
// console.log("Привет, " + "Меня " + "зовут " + "Вазген");

// Practice
// 1. Что выведет в консоль Boolean (“ ”) true
// 2. Что выведет в консоль ? error
// console.log(name);
// const name = "myname";
// 3. Что выведет в консоль ? undefined
// console.log(name);
// var name = "myname";
// 4. Что выведет в консоль Boolean (“”) ? false
// 5. Что выведет в консоль Boolean (-0) ? false
// 6. Что выведет в консоль Boolean (-1) ? true
// 7. Что выведет в консоль Boolean (2) ? true
// 8. Что выведет в консоль console.log("123"+22); 12322
// 9. Что выведет в консоль console.log("123"+"22"); 12322
// 10. Что выведет в консоль console.log("123"-22); 101
// 11. Что выведет в консоль console.log("123"*22); 2706
// 12. Что выведет в консоль console.log(22/"abc"); NaN

// Statement: if, else if, else
// Number() тоже самое что +. Просто + более лаконичен
// console.log(+"123");
// console.log(+"abc");
// console.log(Number("abc"));

// const age = +prompt("Сколько вам лет ?", 12);
// const age = Number(prompt("Сколько вам лет ?", 12));

// Кунстукция if, else if, else работает по цепочке, когда цепочка находит первый правельны
// результат оно останавливается.

// Можно в if, else if, else писать вложенные if, else if, else
// const age = Number(prompt("Сколько вам лет ?"));
// if (age < 18) {
//   if (age < 16) {
//     console.log("Тебе рано, займись спортом");
//   } else {
//     console.log("Тебе в принципе можно, просто закон не позваляет");
//   }
// } else if (age < 18) {
//   console.log("Ты меня не увидешь");
// } else if (age == 18) {
//   console.log("Вы молодй вам можно курить");
// } else {
//   console.log("Вы старый, бергитие здоровя");
// }

// = - присвоить (присвоение)
// let name = "Vazgen";
// let age = 20;

// == - нестрогое равенство
// Мы сравниваем велични, и типы данных отбрасываются
// console.log(1 == "1"); // true;
// console.log(1 == "2"); // false;
// console.log(1 !== 2); // true;
// console.log(1 !== "2"); // true;

// === - строгое равенство
// 1. Сравниваются типы данных
// 2. Сравниважтся величины
// console.log(1 === "1"); // false;
// console.log(1 === "2"); // false;
// console.log(1 == 2); // true;
// console.log(1 !== "2"); // true;
// != - не строгое неравенстов
// !==  строгое неравенстов
