const loginBtn = document.querySelector(".login");
const registrBtn = document.querySelector(".registration");
const [firstModal, secondModal] = document.querySelectorAll(".modal");
const closeLoginBtn = document.querySelector(".close-login");
const closeRegistrBtn = document.querySelector(".close-registr");

loginBtn.addEventListener("click", () => {
  firstModal.classList.add("modal-show");
});

registrBtn.addEventListener("click", () => {
  secondModal.classList.add("modal-show");
});

closeLoginBtn.addEventListener("click", () => {
  firstModal.classList.remove("modal-show");
});

closeRegistrBtn.addEventListener("click", () => {
  secondModal.classList.remove("modal-show");
});
