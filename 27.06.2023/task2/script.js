// Юрий
// Когда DOM загрузися только тогда пусть заработает функция коллбэк (3-43 строку)
document.addEventListener("DOMContentLoaded", function () {
  // здесь берем дом элемент с id  userTableBody
  const userTableBody = document.getElementById("userTableBody");

  // здесь делаем асинцронный запрос
  async function fetchUsers() {
    try {
      // здесь делаем запрос и получаем данные
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // здесь парсим данные
      const users = await response.jon();

      // здесь итертативно добвляем каждого пользователя в таблицу
      users.forEach((user) => {
        const { name, email, username, website } = user;

        // здесь создается строка для добвления всех ячеек
        const row = document.createElement("tr");

        // здесь создается новая ячейка для хранения значения name
        const nameCell = document.createElement("td");
        // здесь ячейки присваеватся текстовое значнеие name
        nameCell.textContent = name;

        // здесь создается новая ячейка для хранения значения email
        const emailCell = document.createElement("td");
        // здесь ячейки присваеватся текстовое значнеие email
        emailCell.textContent = email;

        // здесь создается новая ячейка для хранения значения username
        const usernameCell = document.createElement("td");
        // здесь ячейки присваеватся текстовое значнеие username
        usernameCell.textContent = username;

        // здесь создается новая ячейка для хранения значения website
        const websiteCell = document.createElement("td");
        // здесь создается новая ячейка для хранения значения website
        websiteCell.textContent = website;

        // здесь с помощю метода appendChild добаляем по очереди все поля
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(usernameCell);
        row.appendChild(websiteCell);

        // после тобавления всех полей тобавляем оканчательно свормированную строку из всех данных в элемент с id userTableBody
        userTableBody.append(row);
      });
    } catch (error) {
      const erroText = document.querySelector(".erroText");
      erroText.style.color = "red";
      erroText.style.fontSize = "20px";
      erroText.textContent = `Что то пошло не так, пожалуйсто перезагрузите страницу. ${error.message}`;
    }
  }

  fetchUsers();
});

// // Вазген
// // здесь берем наше таблицы для добавления пользователей
// const userTableBody = document.getElementById("userTableBody");
// // здесь мы создаем пока пустой html, далее хранить список пользоватлеей
// let html = "";

// // здесь создаю функцию для отаброжения пользователей, получаю их через параметр userData
// const renderUsers = (userData) => {
//   // здесь итерируюсь по каждому пользователю и добавляю информацию о нем в переменную html
//   // в результате после итерации в html-e будет царнится весь спискок пользоватлеей
//   userData.forEach((user) => {
//     const { name, email, username, website } = user;
//     // поэтому мы пишем html+= -> это означанет прибавить к предыдущему состаоянию текущее, поэтому у нас
//     // сохраняются все пользователи
//     html += `
//       <tr>
//         <td>${name}</td>
//         <td>${email}</td>
//         <td>${username}</td>
//         <td>${website}</td>
//       </tr>
//     `;
//   });

//   // В конце итерации получаю весь список пользователей в переменной html и довалаю эти элементы в элемент userTableBody
//   userTableBody.insertAdjacentHTML("afterbegin", html);
// };

// // я создаю функцию для запроса и получения пользователей
// const getUsers = async () => {
//   // здесь делаю запрос для получения
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then(
//       // здесь делаю форматирования, так как мне приходит  JSON а мне нужен тип данных массив или объект
//       async (res) => await res.json()
//     )
//     // здесь после форматирования получаю нужный тип даты и передаю данные из сервера в функцию renderUsers для их дальнейшего отаброжения
//     .then((data) => renderUsers(data));
// };

// document.addEventListener("DOMContentLoaded", getUsers);
