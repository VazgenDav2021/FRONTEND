const login = document.querySelector(".login");
const reg = document.querySelector(".reg");
const containerLogin = document.querySelector(".login_Container");
const containerReg = document.querySelector(".reg_Container");

function loginWindow() {
  containerReg.classList.add("close_status");
}

function regWindow() {
  containerLogin.classList.add("close_status");
}

login.addEventListener("click", loginWindow);
reg.addEventListener("click", regWindow);
