const button = document.querySelectorAll(".btn");
const container = document.querySelector(".container");

const [openButton, closeButton, toggleButton] = button;

// Так раборали до обнавления js
// openButton.addEventListener("click", function () {
//   container.classList.add("show");
// });

// Щас чаще увидим функцию по формату "arrow function"
openButton.addEventListener("click", () => {
  // метод add добавляет к элементу тот класс короый мы прописали
  container.classList.add("show");
});

closeButton.addEventListener("click", () => {
  // метод remove удаляет из классов элемента тот класс короый мы прописали
  container.classList.remove("show");
});

toggleButton.addEventListener("click", () => {
  // метод toggle смотрит если данный клас уже есть то он его удаляет,
  // если данного класса нет у элемента то он его добавляет
  container.classList.toggle("show");
});

// 1. создать кнопку, при клике на которыю открывается модалка(поп-ап, dialog)
// 2. Когда кликаете в не модалке или кликаете на крестик или нажимаете на кнопку "escape" то модалка закрывается
