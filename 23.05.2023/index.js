// Array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. let, var, const (let)
// 2. Name of Array (numbers)
// 3. Defining (=)
// 4. Body Array

// Two ways of createing array
// let number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log({ number1, numbers2 });

// Arrays never can be equal to each other
// console.log([] === []); //false
// console.log([1] == [1]); //false -> abc_2313_a == abc_2313_b
// const numbers = [1, 2, 3, 4];
// HEAP -> [1, 2, 3, 4] - abc_2313_a -> numbers = abc_2313_dasdasd
// let a = [1, 2, 3, 4];
// let b = a; // b !== [1, 2, 3, 4]; => b = adress of array
// console.log(a === b); // => abc_2313_a=abc_2313_a
// b = [1, 2, 3, 4]; // abc_2313_2
// console.log(a === b); // => abc_2313_a=abc_2313_2
// const c = [1, 2, 3, 4];
// const d = c;
// console.log(c === d);
// console.log(a === d);

// Getting Elements from Array
// const salaraies = [100, 400, 650, 200, 469, 900];

// console.log(salaraies[0]); // first element of array
// console.log(salaraies[1]); // second element of array
// console.log(salaraies[2]); // third element of array
// console.log(salaraies[salaraies.length - 1]); // last element of array

// Loops
//////////////////// While задать дз
//////////////////// Do While  задать дз
//////////////////// For задать дз

// const salaraies = [100, 400, 650, 200, 469, 900]; // creating of array
// let sum = 0; // variable for storing info about salaris
// // Index in arrays starts from 0
// for (let i = 0; i < 6; i++) {
//   // 1 let i = 0 => defines from which point starts our loop
//   //   i < 6 => condtion which defines how many times our loop will work, it will work till condition will be TRUE
//   //   i++ (Increment) => For making work our loop
//   //   As many times our loop works  as many times body loop works too
//   sum = sum + salaraies[i];
// }

// console.log(sum);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // Defines how many items there are in array
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length - 1]);

// ForEach
// const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// array.forEach((vazgen, vazgnesIndex, vazgensArray) =>
//   console.log(vazgen, vazgnesIndex, vazgensArray)
// );
// FIrst arugment each element
// Second arugment index current element
// Third argument is array that is uing foreach
// const salaraies = [100, 400, 650, 200, 469, 900];
// let sum = 0;
// salaraies.forEach((salary) => (sum = sum + salary));
// console.log(sum);

// Map
// const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// array.map((vazgen, vazgnesIndex, vazgensArray) =>
//   console.log(vazgen, vazgnesIndex, vazgensArray)
// );

// const salaraies = [100, 400, 650, 200, 469, 900];
// let sum = 0;
// salaraies.map((salary) => (sum = sum + salary));
// console.log(sum);

// Map VS ForEach => forEach return unefined

// const salaraies = [100, 400, 650, 200, 469, 900];

// const salareis1 = salaraies.map((salary) => {
//   return salary * 1.25;
// });

// const salareis2 = salaraies.forEach((salary) => {
//   return salary * 1.25;
// });

// // console.log({ salaraies });
// console.log({ salareis1 });
// console.log({ salareis2 });

// Reduce
// const salarySum = salaraies.reduce((prevState, currentValue) => {
//   console.log({ prevState, currentValue });
//   return prevState * currentValue;
// }, 1);

// console.log(salarySum);

// Reduce get 2 arugments
// 1 argument it is callback function, which get 2 arguments 1st arugment prevState
// 2 argument callback currentValue
// 2 argument reduce default value
