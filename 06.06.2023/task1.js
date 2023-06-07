// привязываемся к модалке
const modal = document.querySelector(".modal");
// привязываемся к ченрой тени
const overlay = document.querySelector(".overlay");
// привязываемся к крестику внутри модалки
const closeModalBtn = document.querySelector(".close-modal");
// привязываемся к кнопкам для открытия модалки
const btnsForOpening = document.querySelectorAll(".show-modal");

// пишем фунцкионцал как должен вести себя бразузер когда заработала функция openModal
const openModal = () => {
  // у тени должен пропасть класс hidden
  modal.classList.remove("hidden");
  // у модалки должен пропасть класс hidden
  overlay.classList.remove("hidden");
};

// пишем фунцкионцал как должен вести себя бразузер когда заработала функция closeModal
const closeModal = () => {
  // у модалки должен появится класс hidden для того чтобы он стал невидемым
  modal.classList.add("hidden");
  // у тени должен появится класс hidden для того чтобы она стал невидемым
  overlay.classList.add("hidden");
};

// для того чтовы 3ем кнопкам повесить функцию открытия мы делаем foreach и каждой кнопке прикрепляем фунцкию openModal
btnsForOpening.forEach((btn, idx) => {
  btn.addEventListener("click", openModal);
});

// если кликнули на крестик или тень то закрыть модалку
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// для того чтобы при клике на кнопку escape закрыть модалку и тень
// обцешиваем на глобальный документ обравотчик события
// keydown - срабатывает когда человек кликает на клавиатуру
// В результате формирется событие под названием event/e
document.addEventListener("keydown", closeModal);
