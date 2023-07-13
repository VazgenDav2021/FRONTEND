// const box = document.querySelector(".box");

// // const width = prompt("Enter width of div");
// // const height = prompt("Enter height of div");
// // const color = prompt("Enter color of div");
// // box.style.width = `${width}px`;
// // box.style.height = `${height}px`;
// // box.style.background = `${color}`;

// // box.classList.add("extra-class");
// // box.classList.remove("elem2");

// // box.addEventListener("click", () => {
// //   box.classList.toggle("toggle");
// // });

// // 1 СДелать 2 кнопки "Логин"/"Регистрация"
// // При клике на логин показывать модальное окно логина
// // При клике на регострацию показывать модальное окно регистрации
// // Не используем inline стили а все пишем через классы

// TASK 2

//
const container = document.querySelector(".container");
let html = ``;
const apartments = [
  {
    location: "France",
    street: "Sharl De Gol, 25",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta, fugiat consequuntur rem est praesentium quos eaque quo quis velit.",
    rate: 5,
    image:
      "https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1",
  },

  {
    location: "Italy",
    street: "Roma 1",
    text: "dicta, fugiat consequuntur rem est praesentium quos eaque quo quis velit.",
    rate: 3,
    image:
      "https://image1.apartmentfinder.com/i2/4R_kMh3-cQLUb9F6sm4PLt5X_f41ANVW63fh_-7jWR0/110/image.jpg",
  },
  {
    location: "Dubai",
    street: "Sheikh Zaid, 25",
    text: "Quibusdam dicta, fugiat consequuntur rem est praesentium quos eaque quo quis velit.",
    rate: 2,
    image:
      "https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_326,h_2638,w_4397,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-5g13txeqo-mark-taylor-companies-client/g5-cl-1ilppjz7kx-aviva/uploads/18-037-24_Fire_Pit_Area_efyaf4.jpg",
  },

  {
    location: "Germany",
    street: "Berlin32 1",
    text: "asdkmmk asdnoe asdnoas d 213 quos eaque quo quis velit.",
    rate: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeosyN6v3CS4J4bHQr_nJWxvb6ZLx4ha7pA&usqp=CAU",
  },
];

// Для отаборжения количества звездоечк
function renderAparament({ street, rate }) {
  // создаю переменную для хранения звездочек
  let ratesImages = "";

  for (let i = 1; i <= rate; i++) {
    ratesImages += `<img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=2000" alt="${street}"/>`;
  }

  // в конце итерации возращяю для каждого апратмента зездочки
  return ratesImages;
}

apartments.forEach(({ location, street, text, rate, image }, id) => {
  // Во время каждой итерации вызвыаю функцию renderAparament для получения звездочек и храню их в переменной resultImages
  const resultImages = renderAparament({ street, rate });

  //   Создаю обертку для каждого апаратамента
  const aparatments = document.createElement("div");
  //   добавляю класс  "apartment"
  aparatments.classList.add("apartment");

  const locationP = document.createElement("p");
  locationP.textContent = location;

  const textP = document.createElement("p");
  textP.textContent = text;

  const aparatmentImage = document.createElement("img");
  aparatmentImage.src = image;

  // Создаю обертку для форографии звездочек
  const starsWrapper = document.createElement("div");
  // добабляю в обертку фотографии
  starsWrapper.insertAdjacentHTML("afterbegin", resultImages);
  // добавляю к оборкте новый класс
  starsWrapper.classList.add("images");

  // в конце каждой итерации для обертки каждого апратамента добавляю свои значения
  aparatments.append(aparatmentImage, locationP, starsWrapper, textP);
  // во время каждой итераци я добалю в мой общий контейнер новоабразованную карточку о каждоом апратаменте
  container.append(aparatments);
});

container.insertAdjacentHTML("afterbegin", html);
