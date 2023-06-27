// 1. Из спи https://jsonplaceholder.typicode.com/users
// Взять всех пользователей и сделать консоль лог
// Через fetch

// Дмитрий Токарев
// const url = "https://jsonplaceholder.typicode.com/users/";
// async function getUsers() {
//   const data = await fetch(url);
//   const userData = await data.json();
//   console.log(userData);
// }
// getUsers();

// // Когда дом прогрузится
// // document.addEventListener("DOMContentLoaded", getUsers);

// Анна Мария & Юрий
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     console.log(users);
//   });

// const getUsers = async () => [
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//       console.log(users);
//     }),
// ];

// document.addEventListener("DOMContentLoaded", getUsers);

// 2 Отбаброзить ползователей которых получили в HTML таблице.
