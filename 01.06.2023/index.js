// // Задание: Создание массива объектов студентов
// // // Создайте пустой массив с именем "students".
// // // Добавьте в массив несколько объектов, представляющих студентов.
// // // Каждый объект должен иметь свойства, такие как "имя", "возраст", "курс" и т. д.

// const students = [];

// // добавили в массив students 3 студента
// // students.push({ name: "Vazgen", age: 18, course: "Frontend", fee: 2500 });
// // students.push({ name: "Dmitriy", age: 21, course: "Java", fee: 2700 });
// // students.push({ name: "ALexei", age: 23, course: "QA", fee: 3000 });

// // const totalFee = students.reduce((acc, curr) => {
// //   // рекомендую логировать, особенно при работе с объектами
// //   return acc + curr.fee;
// // }, 0);
// // console.log({ totalFee }); //8200

// // 1 Написать функцию которая вам высает окно. В окне спрашивается сколько студентов добавить
// // 2 Идет итерация столько раз сколько вы написали в окне
// // 3 Во время каждой итерации вам надо добавить студента со след полями (name, age, fee, course)
// // 4 В результате работы функции мы должны получить массив из студентов

// function addStudents() {
//   const count = +prompt("Enter number of student"); // + чтобы промпт возвращал число
//   const students = []; // пустой массив
//   for (let i = 0; i < count; i++) {
//     // делает итерацию пока i меньше написанного числа из промпта
//     const name = prompt(`Enter student name NO ${i + 1}`); // берем имя студента
//     const age = prompt(`Enter ${name} age`); // берем возраст студента
//     const course = prompt(`Enter ${name} course`); // берем курс студента
//     const fee = +prompt(`Enter ${name} fee`); // берем годоовая оплата студента
//     // В конце каждой итерации мы добавляем новый объект студента в массив  students
//     // students.push({ name: name, age: age, course: course, fee: fee }); // писали до ES6
//     students.push({ name, age, course, fee }); // если название ключа и название значения совпадает то :значение можно не писать
//   }

//   const totalFee = students.reduce((acc, cur) => {
//     return acc + cur.fee;
//   }, 0);

//   //   return students, totalFee; // неправильно, функция возвращает только одно значение
//   return { students, totalFee }; // она возвращает одно значение то есть возвращает обект, и внем уже есть 2 значения
//   //   return [ students, totalFee ]; // она возвращает одно значение то есть возвращает массив, и внем уже есть 2 значения
// }
// console.log(addStudents());

// DOM манипуляциями
// Есть различные методы для манипуляции html элементов с помощъю JS.
// const p_s = document.getElementsByTagName("p"); // он возвраяает массив элеменотв (p)
// console.log({ p_s });
// const spans_s = document.querySelectorAll("span"); // он возвраяает массив элеменотв (span)
// console.log({ spans_s });
// getElementsByTagName VS querySelectorAll
// getElementsByTagName - возвращает HTML коллекцию. Мы можем находить эелемнты через название тегов
// querySelectorAll - возвращает NodeList колекции. Мы можем находить эелементы через имя тега, имя класса, имя айд, атрибуту итд

// const a = document.getElementById("link"); // getElementById находить эелемент по названиж id, если нечего не нашел то возвращает null
// console.log({ a });

// const div_s = document.getElementsByClassName("container"); // возвращает массив элементов по названию класса
// console.log({ div_s });

// const div_class = document.querySelector(".box");
// console.log({ div_class });

// const div_id = document.querySelector("#box");
// console.log({ div_id });

// const div_by_tag_name = document.querySelector("div");
// console.log({ div_by_tag_name: div_by_tag_name.textContent });
// querySelector & querySelectorAll могут заменять многие методы

// Сделать через функцию
// 2 Открыть модальное окно (prompt)
// 3 ответ модального окна показать на экрене в теге p

// function addTextIntoP() {
//   const text = prompt("Enter text that you wnat to be shown"); //  беру значение из промпта

//   const p = document.querySelector("p"); // беру тег p
//   p.textContent = text; // через значение textContent я добавляю текст внутри параграфа(p)
// }

// addTextIntoP();

// function addTextDynamically() {
//   const text = prompt("Enter text that you wnat to be shown"); // текст который должен быть добавлен
//   const element = prompt("Enter element that you wnat to insert text"); // названи элемента
//   const type = prompt("Enter element type (class,id,tag)"); // тип эелемента id, class или tag

//   if (type === "class") {
//     // если клиент указывает на атрибут class то отрабатывай код с 92 по 94 строчку
//     const className = prompt("Enter Class Name"); // создай переменную в котором будет хранится название класса
//     document.querySelector(`.${className}`).textContent = text; // найди элемент с названием данного класса и добавь в него текст
//   } else if (type === "id") {
//     // если клиент указывает на атрибут id то отрабатывай код с 95 по 98 строчку
//     const idName = prompt("Enter Id Name"); // создай переменную в котором будет хранится название id
//     document.querySelector(`#${idName}`).textContent = text; // найди элемент с названием данного id и добавь в него текст
//   } else {
//     // если не class и не id то просто найди по названию тега
//     document.querySelector(element).textContent = text; // найди этот тег и добавь в него текст
//   }
// }

// addTextDynamically();

// const example = document.querySelector(".example"); // взять элемент с которым мы хотим работать
// // у данного элемента появляется поле style и у данного поле есть куча значении как в css
// // backgroun-color -> backgroundColor пишем qebab casе-ом
// // когда хотим дать значение (к примеру цвет красный) пишем через знак = и в ковычках
// example.style.backgroundColor = "red";
// example.style.width = "200px";
// example.style.height = "400px";
// example.style.transform = "rotate(330deg)";
