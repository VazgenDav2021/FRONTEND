// // TryCatch

// const getUsers = async () => {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/users/");
//     const res = await data.json();
//     callFunctionThatNotExists();
//     console.log({ res });
//   } catch (error) {
//     // 1. // console.log({ error });
//     // 2. throw new Error("Что то пошло не так");
//     // 3.

//     const h1 = document.createElement("h1");
//     h1.textContent = error;
//     document.body.append(h1);
//   }
// };

// document.addEventListener("DOMContentLoaded", getUsers);

// Напишите простой запрос по получению данных о конкретной странице
// Используя блок tryCatch при неправельном выполнении кода покажите красный текст в html
// const url = "https://restcountries.com/v3.1/name/armeniaa";

// const getCountry = async () => {
//   try {
//     const data = fetch(url);
//     const country = data.json();
//     console.log(country);
//   } catch (error) {
//     const p = document.createElement("p");
//     p.textContent = "Такой страны нет";
//     p.style.color = "red";
//     document.body.appendChild(p);
//   }
// };

// getCountry();

// Then, catch, finnaly

// const url = "https://restcountries.com/v3.1/name/armenia";

// const getCountry = async () => {
//   await fetch(url)
//     .then(async (data) => {
//       return data.json();
//     })
//     .then((data) => {
//       return data[0];
//     })
//     .then((data) => {
//       console.log({ data });
//     })
//     .then((data) => {
//       // сдесь data придет undefined поскольку 3 then мне нечего не возвращает
//       console.log({ data });
//     });
// };

// document.addEventListener("DOMContentLoaded", getCountry);

// Написать фунцкию которая возвращает мне страну с  then()
// 1ый then делает парс JSON
// 2ой then мне возвращает данный парс с 0индексом так как дата у меня является массиво
// 3ем then сделать консоль лог даты

// const url = "https://restcountries.com/v3.1/name/armenia";

// const getCountry = async () => {
//   await fetch(url)
//     .then((data) => {
//       console.log(data);
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//       //   functionThatNotExists();
//       return data[0];
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       //    1. //   console.log({ error });
//       //   2. throw new Error(error)
//       //   3.

//       const p = document.createElement("p");
//       p.textContent = error;
//       document.body.append(p);
//     })
//     .finally(() => {
//       const p = document.createElement("p");
//       p.textContent = "Я буду работать при любом исходе";
//       document.body.append(p);
//     });
// };

// document.addEventListener("DOMContentLoaded", getCountry);

// 1. Написать фунцкию которая отрисоввыает государство в html
// 2. Написать функцию котоая получает данные о  государстве и вызывает 1ю фунцкию в блоке then()
// 3. Если у нас будет ошибка то нас странице написать текст "ЧТо то пошло не так" красным цветом
// 4. Добавить блок finally где будет отабожатся тескт "Я полюбому буду показыватся"

const url = "https://restcountries.com/v3.1/name/armenia";

const getCountry = async () => {
  await fetch(url)
    .then((data) => {
      console.log(data);
      // после того как взял значнеие распарсил его
      return data.json();
    })
    .then((data) => {
      // создал эелемент img для отаброжения фотографии
      const flag = document.createElement("img");
      // создал параграф для отраброжения название сталицы
      const pCapital = document.createElement("p");
      // у тега img есть атрибут src,  on его приравнивает к дате котоа пршила
      flag.src = data[0].flags.png;
      // парграфу задает значние котора пришла из сервера
      pCapital.textContent = data[0].capital;
      // запихивает в нашу страницу 2 этих элемента
      document.body.append(flag);
      document.body.append(pCapital);
      //   Если хотите чтобы заработал блок catch но раскоментируере 130 строку
      //   funvtionThatNotExists();
    })
    .catch((error) => {
      // если у нас будет ошибка то создается h2 элемент
      const h2 = document.createElement("h2");
      // сзесь элемнету h2 присваеваем значения (error) - а (он у нас динамичный)
      h2.textContent = error;
      // запихивает в нашу страницу этот элемент
      document.body.append(h2);
    })
    // этото блок у меня сработает при любом исходе
    .finally(() => {
      // создал эелемент p для отаброжения текста
      const p = document.createElement("p");
      // сзесь элемнету p присваеваем значения
      p.textContent = "Я появляюсь при любом исходе";
      // запихивает в нашу страницу этот элемент
      document.body.append(p);
    });
};

document.addEventListener("DOMContentLoaded", getCountry);
