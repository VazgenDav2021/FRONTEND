const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

// // XMLHttpRequest
// function getCountryByName(countryNaem) {
//   // 1. надо создать сущность на основе конструктора new XMLHttpRequest();
//   const request = new XMLHttpRequest();
//   // 2. Использовать метод open для того что бы указать первым параметром метод запроса
//   request.open("GET", `https://restcountries.com/v3.1/name/${countryNaem}`);
//   // 3. Отправку запроса
//   request.send();

//   // 4. У запроса есть разлинчы event-ы, мы используем "load",
//   // что означет если у меня запрос прошел успешно и завершился то вызвое колбэк фунцкию
//   request.addEventListener("load", function () {
//     // 5. Колбэк функцию лучше писать через function decloration, чтобы могли ползьватся контекстом this(в arrow function у нас нет контекста this)
//     // 6. Берем ответ от сервера (this.responseText)
//     const [data] = JSON.parse(this.responseText);

//     // Создаем пустую строку
// let language = "";
// // поскольку язык страны у меня хранится в обекте, я должен итерироватся и взять название языка
// for (let lng in data?.languages) {
//   // во время итерации переменную language приравниваю к языку страны
//   language = data.languages[lng];
// }

// let currency = "";

// for (let curr in data.currencies) {
//   // во время итерации переменную language приравниваю к названию валюты
//   currency = data.currencies[curr].name;
// }

//     // здесь создаем HTML и в нечо добавляем динамичниые данные из сервера
//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//               <p class="country__row"><span>🗣️</span>${language}</p>
//             <p class="country__row"><span>💰</span>${currency}</p>
//           </div>
//         </article>
//     `;

//     // 7. Добавляем полученный HTML с данными в наш HTML документ
//     // 8. говорим довавь в элемемнт "countriesContainer" новый html
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// // 9. Здесь вешаем обработчик события на наш html документ и говорим вызвои функцию getCountryByName когда загрузится мой DOM ("DOMContentLoaded")
// // document.addEventListener("DOMContentLoaded", getCountryByName);
// // 10. При клике на кнопку вызови функцию getCountryByName
// // btn.addEventListener("click", getCountryByName);
// document.addEventListener("DOMContentLoaded", () => {
//   getCountryByName("Armenia");
//   getCountryByName("Germany");
//   getCountryByName("Argentina");
// });

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// ------------------------------FETCH----------------------------
const renderEror = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  let language = "";
  // поскольку язык страны у меня хранится в обекте, я должен итерироватся и взять название языка
  for (let lng in data?.languages) {
    // во время итерации переменную language приравниваю к языку страны
    language = data.languages[lng];
  }

  let currency = "";

  for (let curr in data.currencies) {
    // во время итерации переменную language приравниваю к названию валюты
    currency = data.currencies[curr].name;
  }
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
              <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getJSON = async function (url, errorMessage = "Somtheing went wrong") {
  return await fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`${errorMessage} ${res.status}`);
    }

    return res.json();
  });
};

// const getCountry = async () => {
//   const data = await getJSON("https://restcountries.com/v3.1/name/germany");

//   renderCountry(data[0]);
// };

// отаброжения государства и его соседей
const renderCountryAndItsNeighbors = async () => {
  // здесь я беру информацию о конкретном государстве
  const data = await getJSON("https://restcountries.com/v3.1/name/armenia");
  // отображать страну которая мне нужна
  renderCountry(data[0]);

  // здесь я беру название соседних государств
  const borderes = data[0].borders;

  // делаю мап каждого государства и делаю запрос для получения данных о каждом из них
  borderes.map(async (eachCountry) => {
    const data = await getJSON(
      `https://restcountries.com/v3.1/alpha?codes=${eachCountry}`
    );

    // во время каждой итерации рисую страну
    renderCountry(data[0], "neighbour");
  });
};

document.addEventListener("DOMContentLoaded", renderCountryAndItsNeighbors);
