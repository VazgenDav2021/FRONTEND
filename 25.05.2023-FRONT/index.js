// // какие символы мы сщитаем спец символами
// const specSymbols = [",", ".", "-", "/", ":", ";", "@", "$", "%"];

// // тестовое
// const text = "Hello@WOlrd";

// // Инициализируем флажок
// let hasSpecSymbol = false;

// // Делаем цикл, для проверки каждого символа и переменной text
// for (let i = 0; i < text.length; i++) {
//   // мы используем filter для итерированной
//   // проверки каждого спец символа с каждым символом из text
//   specSymbols.filter((char) => {
//     // если итериремый спец символ = символу из нашего texta-а
//     if (char === text[i]) {
//       // Меняем флажок на true, у нас нашолся спец символ
//       hasSpecSymbol = true;
//       console.log({ hasSpecSymbol, char });
//       // Здесь мы пишем return, что означает остановить итерацию
//       // так как она нам больше не нужна, мы нашли спец символ
//       return;
//     }
//   });
// }

// if (hasSpecSymbol) {
//   console.log("We have Spec Sybol");
// } else {
//   console.log("We dont have spec Symbol");
// }

// const array = ["Apple", "WaterMelon", "Grape", "Pinapple", "Grape"];

// // push - он добавляет в конец массива один или несколько элементов и возвращает его длину
// push мутирует наш начальный массив
// array.push("Potato"); // здесь мы доабли в массив Potato
// array.push("Orange", "Cucamber"); // здесь мы доабли в массив Potato, Cucamber
// console.log({ array });
// const newLengthOfArray = array.push("strawberry"); // newLengthOfArray = длинне массива так как результат работы push это длина массива
// console.log({ newLengthOfArray });
// 1. Push мутирует наш массив

// // pop - удаляет последний элемент из массива и возвращяет его
// array.pop(); // удаляет последной элемент (Pinapple)
// const lastElementOfArray = array.pop(); // удаляет последний эл-нт из массива ("Grape"), и присаветвает его к lastElementOfArray
// console.log({ lastElementOfArray });

// join - соеяденяет все элементы массива в строку, по задданому признаки (символу)
// const stringgifiedArray = array.join("-"); // сояденяет все элементы массива через "-"
// console.log({ array }); // начальный массив, array никак не поменялся
// console.log({ stringgifiedArray }); // Apple-WaterMelon-Grape-Pinapple
//
//
//
// // const stringgifiedArray2 = array.join(", "); // будет без пробела Apple,WaterMelon,Grape,Pinapple
// const stringgifiedArray2 = array.join(", "); // будет с пробелом Apple, WaterMelon, Grape, Pinapple
// console.log({ stringgifiedArray2 });
//
// const stringgifiedArray3 = array.join(" "); // Apple WaterMelon Grape Pinapple
// console.log({ stringgifiedArray3 });
// const chatBotANser = [
//   "Hello",
//   "Anna,",
//   "I",
//   "found",
//   "what",
//   "you",
//   "wanted",
//   "to",
//   "found",
//   "Yeseterday.",
//   "Here",
//   "is",
//   "it",
// ];
// const chatToAnna = chatBotANser.join(" ");
// console.log({ chatToAnna });

// indexOf возвращает первый найденный индекс элемента массива. Если он нечего не нашел то возвращает -1
// const indexOfGrape = array.indexOf("Grape"); // 2 так как элемент Grape имеет индекс 2 в массиве array, возмет первый попавшийся
// console.log({ indexOfGrape });
// const indexOfHodGod = array.indexOf("Hot Dog"); // -1 так как эл-та Hot Dog нет в массиве array
// console.log({ indexOfHodGod });

// const newArray = array.slice(0); // возвращет копию массива
// // Принимает 2 аргумента. 1 аргумент это у нас индекс с какого мы начинаем копировать.
// // 2 аргумент (опциональный), означает до какого индекса мы пытаемся скопировать.
// // Если мы не поставили 2ой аргумент то копирование будет до последнего элемента включительно
// // console.log({ newArray });
// const newArray2 = array.slice(1, 2); // WaterMelon
// console.log({ newArray2 });

// 1. ["+7", "8", "9", "6", "7", "7", "7", "6", "7", "8", "7", "8"] -> +789677767878
// 2. ["+7", "+374", "+1"], ["+37491090708", "+79267977777", "+181822322222", "+4923343242332113256"]
// Если номер телефона начинается на +7, +374, +1 то остановить проверку и написать какой то текст

// 1
// const phoneNumberInArrayFormat = [
//   "+7",
//   "8",
//   "9",
//   "6",
//   "7",
//   "7",
//   "7",
//   "6",
//   "7",
//   "8",
//   "7",
//   "8",
// ];

// const strigifiedNumber = phoneNumberInArrayFormat.join(""); // +789677767878;
// console.log({ strigifiedNumber });

// 2
// const countiesThatAreBlocked = ["+7", "+374", "+1"];
// const users1 = [
//   "+37491090708",
//   "+79267977777",
//   "+181822322222",
//   "+4923343242332113256",
// ];

// const users2 = [
//   "+49233432423213256",
//   "+49233432411113256",
//   "+4923343242332113333",
// ];

// let hasBlockedNumberInList = false;

// const checkNumber = (codes, numbersList) => {
//   numbersList.foreach((number) => {
//     codes.forEach((code) => {
//       if (number.startsWith(code)) {
//         hasBlockedNumberInList = true;
//         return;
//       }
//     });
//   });

//   if (hasBlockedNumberInList) {
//     return `One of that blocked numbers is on that list`;
//   } else {
//     return `Everything is ok`;
//   }
// };

// console.log(checkNumber(countiesThatAreBlocked, users1));
// console.log(checkNumber(countiesThatAreBlocked, users2));

// 1. Filter, как он используется
// 2. Прочитать про startsWith, что он делает и возвращает

// Objects

// SAME THING WITH ARRAY
// 1. Both of them are referal types of data
// 2. Array is based on Object (prototype)
// 3. Both of them can store muliple data
// 4. Each of them hes its own method

// DIFFERENCE WITH ARRAY
// 1. Array consists with key and values, keys are indexes of our array, values are values that we insert into array.
// 2. Object consists with key and values, keys must be defined by us too, values are values that we insert into array.

// созадем обект с ключами (name, surname, age ...) со занчениями (Vazgen, Davtyan, 23, true ...)
// const vazgenObject = {
//   name: "Vazgen",
//   surname: "Davtyan",
//   age: 23,
//   isProgrammer: true,
//   hasKids: undefined,
//   famillyMembers: null,
// };
// console.log({ vazgenObject });
// если у нас ключ дублируется то берется последнее значение
// const vazgenObject = {
//   name: "Vazgen",
//   surname: "Davtyan",
//   age: 23,
//   isProgrammer: true,
//   hasKids: undefined,
//   famillyMembers: null,
//   name: "Vladimir",
// };
// // console.log({ vazgenObject });

// const vazgenName = vazgenObject.name; // берем значение name из обекта vazgenObject
// const vazgenAge = vazgenObject.age; // берем значение age из обекта vazgenObject
// console.log({ vazgenName, vazgenAge });
