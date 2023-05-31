// Найдите сумму всех элементов в массиве. - reduce
// Найдите наибольшее число в массиве. - filter + Math.max
// Найдите наименьшее число в массиве. -  filter + Math.max
// Посчитайте количество отрицательных чисел в массиве. - filter
// Проверьте, все ли элементы в массиве являются положительными числами. - every
// Отсортируйте массив в порядке возрастания. - sort
// Отсортируйте массив в порядке убывания. - sort
// Объедините два массива в один, чтобы получить новый массив, содержащий элементы обоих исходных массивов. - concat

// const array = [
//   66, 4, 2, 7, 3, 9, 22, 10, 12, 13, 14, 1, 15, 17, -22, -3, -99, -62,
// ];

// 1 Найдите сумму всех элементов в массиве
// const summOfValues = array.reduce((acc, currentValue) => {
//   const sum = acc + currentValue;
//   return sum;
// }, 1000);
// console.log({ summOfValues });

// 2 Найдите наибольшее число в массиве.
// const maximumValue = array.sort((num1, num2) => {
//   return num1 - num2;
// });
// let maxValue = maximumValue[maximumValue.length - 1];
// console.log({ maxValue });

// 3 Найдите наименьшее число в массиве
// const minimalValue = array
//   .sort((num1, num2) => {
//     return num2 - num1;
//   })
//   .reverse();
// let maxValue = minimalValue[0];
// console.log({ maxValue });

// 4 Посчитайте количество отрицательных чисел в массиве
// const negatvieValuesCount = array.filter((number, idx, arr) => {
//   return number < 0;
// }).length;
// console.log({ negatvieValuesCount });

// 5 Проверьте, все ли элементы в массиве являются положительными числами.
// const everyItemIsPossitiveNumber = array.every((number) => {
//   return number > 0;
// });
// console.log({ everyItemIsPossitiveNumber });

// 6 Отсортируйте массив в порядке возрастания. // 7 Отсортируйте массив в порядке убывания.
// Метод sort мутирует изначальный массив
// const fromMinToMax = array.sort((prevNumber, currentNumber) => {
//   return prevNumber - currentNumber;
// });

// const fromMaxToMin = array.sort((prevNumber, currentNumber) => {
//   return currentNumber - prevNumber;
// });

// console.log({ fromMinToMax });
// console.log({ fromMaxToMin });

// 8 Объедините два массива в один, чтобы получить новый массив, содержащий элементы обоих исходных массивов.
// const array2 = ["Vazgen", true, 6, undefined, null, ["Davtyan", "Yerevan"], {}];
// const combinedArray = array.concat(array2);
// console.log({ combinedArray });

// Object
const vazgen = {
  name: "Vazgen",
  surname: "Davtyan",
  age: 23,
  isMarried: undefined,
  hasKids: false,
  familiy: ["Father", "Mother", "Sisters", "Borthers"],
  family_name: {
    father: "Petr",
    mother: "Elena",
    sisters: "Anna",
    borthers: "Hayk",
    howManyKidsHasEachOne: [3, 3, 4],
  },
};

// console.log(vazgen.name);
// console.log(vazgen.isMarried);
// console.log(vazgen.family_name);
// console.log(vazgen.family_name.howManyKidsHasEachOne);

// JSON.stringify -> JSON.parse
// Object.freeze()
// {...}
// let alexei = vazgen;
// alexei.name = "Aleks"; // если приравнивем обекты друг к другу и после сделаем изменения хоть в одном то значение поменяется и в другом
// console.log({ alexei, vazgen });

// const apple = {};

// apple.name = "Apple Inc";
// apple.foundationYear = 2004;
// apple.SEOs = ["Ilon Mask", "Bill Gates", "Steve Jobs"];
// apple.products = {
//   2008: "Iphone 3G",
//   2012: "IPOD 1",
//   2015: "Ipone 5s",
//   2020: null,
// };
// console.log({ apple });

// function questionToVazgen() {
//   const question = prompt("What info do you need to know about Vazgen"); // keep values for keey

//   //   For getting dynamic keys value from object we can not use .
//   //   if (vazgen.question) {
//   //     return vazgen.question;
//   //   } else {
//   //     return "We dont have info for that request";
//   //   }

//   //   console.log({ vazgen, question });

//   if (vazgen[question]) {
//     return vazgen[question];
//   } else {
//     return "We dont have info for that request";
//   }
// }
// console.log(questionToVazgen());
// console.log(vazgen.name); // for static info
// console.log(vazgen["name"]); // used for dynamic cases

// 1 Create 2 object Bob and Jhon. Each object will have these values, name, age, height, weight,
// 2 Calculate Which BMI is Higher
// 3 (weight / height) ** 2
// 4 Show which BMI is higher

const person1 = {
  name: "John",
  age: 30,
  weight: 80,
  height: 1.75,
};

// Second person
const person2 = {
  name: "Jane",
  age: 25,
  weight: 80,
  height: 1.75,
};

const calcuLateBMI = (object) => {
  object.BMI = (object.weight / object.height) ** 2;
};

calcuLateBMI(person1);
calcuLateBMI(person2);

const checkBMI = (p1, p2) => {
  if (p1.BMI > p2.BMI) {
    return `${p1.name} has more BMI then ${p2.name}`;
  } else if (p1.BMI < p2.BMI) {
    return `${p2.name} has more BMI then ${p1.name}`;
  } else {
    return "Both BMI-s are equal";
  }
};

console.log(checkBMI(person1, person2));
