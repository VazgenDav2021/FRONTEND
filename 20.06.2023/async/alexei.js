// 1 закоментировать весь код
// 2 Создать новый документ
// 3 Сoздать в html инпут, написать там назваине государства
// 4 При клике на конпку найти это государство и ее отрабозить с соседями
// 5 Если данного государства нет то вывести теккст что такой страны нет

const countryInput = document.getElementById("countryInput");
const countriesContainer = document.querySelector(".countries");

const displayCountryAndNeighbors = async (countryName) => {
  try {
    const countryData = await getJSON(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    countriesContainer.innerHTML = "";

    renderCountry(countryData[0]);

    const borders = countryData[0].borders;

    // тоже правильно просто много запросов
    // for (let i = 0; i < borders.length; i++) {
    //   const borderCountryData = await getJSON(
    //     `https://restcountries.com/v3.1/alpha?codes=${borders[i]}`
    //   );
    //   renderCountry(borderCountryData[0], "neighbour");
    // }

    const stringifyCountries = borders.join(",");
    const neighboursData = await getJSON(
      `https://restcountries.com/v3.1/alpha?codes=${stringifyCountries}`
    );
    neighboursData.map((eachNeighboe) =>
      renderCountry(eachNeighboe, "neighbour")
    );
  } catch (error) {
    console.log(error);
  }
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

const getCountryAndNeighbors = () => {
  const countryName = countryInput.value.trim();
  if (countryName !== "") {
    displayCountryAndNeighbors(countryName);
  }
};

const btnCountry = document.querySelector(".btn-country");
btnCountry.addEventListener("click", getCountryAndNeighbors);
