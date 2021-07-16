const modalPopup = document.querySelector(".feedback");
const modal = document.querySelector(".overlay");
const sliderFirst = document.querySelector(".first-slider");
const sliderSecond = document.querySelector(".second-slider");
const sliderThird = document.querySelector(".third-slider");
const siteWrapper = document.querySelector(".site-wrapper");
const menuList = document.querySelector(".catalog-menu");
const catalogMenu = document.querySelector(".menu-list");
const search = document.querySelector(".search");
const searchWrapper = document.querySelector(".search-wrapper");
const userLogin = document.querySelector(".login");
const loginWrapper = document.querySelector(".login-form");
const activeCart = document.querySelector(".active-cart");
const cartWrapper = document.querySelector(".cart-table-wrapper");

const GREEN_COLOR = "#849D8F";
const BLUE_COLOR = "#8996A6";
const BROWN_COLOR = "#9D8B84";


let isStorageSupport = true;
let storageNameForm = "";
let storageEmailForm = "";

const setListener = function (target, type, listener) {
  if (!target) {
    return;
  }
  target.addEventListener(type, listener);
}

setListener(sliderFirst, "click", function () {
  sliderSecond.classList.remove("current");
  sliderThird.classList.remove("current");
  sliderFirst.classList.add("current");
  document.body.style.backgroundColor = GREEN_COLOR;
  siteWrapper.className = "";
  siteWrapper.className = "site-wrapper site-wrapper-1";
});

setListener(sliderSecond, "click", function () {
  sliderFirst.classList.remove("current");
  sliderThird.classList.remove("current");
  sliderSecond.classList.add("current");
  document.body.style.backgroundColor = BLUE_COLOR;
  siteWrapper.className = "";
  siteWrapper.className = "site-wrapper site-wrapper-2";
});

setListener(sliderThird, "click", function () {
  sliderSecond.classList.remove("current");
  sliderFirst.classList.remove("current");
  sliderThird.classList.add("current");
  document.body.style.backgroundColor = BROWN_COLOR;
  siteWrapper.className = "";
  siteWrapper.className = "site-wrapper site-wrapper-3";
});

if (modal) {
  const modalClose = modal.querySelector(".modal-close");
  const username = modal.querySelector("[name=name-surname]");
  const email = modal.querySelector("[name=email]");
  const submitButton = modal.querySelector(".feedback-form");
  const modalForm = modal.querySelector(".feedback-modal");

  try {
    storageNameForm = localStorage.getItem("login");
    storageEmailForm = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  setListener(modalPopup, "click", function (evt) {
    evt.preventDefault();

    const loginForm = modal.querySelector(".login-input-form");
    const emailForm = modal.querySelector(".email-form-input");
    const areaForm = modal.querySelector(".feedback-area");

    modal.classList.add("modal-visible");
    modalForm.classList.add("feedback-modal-show");
    if (storageNameForm || storageEmailForm) {
      loginForm.value = storageNameForm;
      emailForm.value = storageEmailForm;
      areaForm.focus();
    }
  });

  modalClose.addEventListener("click", function () {
    modal.classList.remove("modal-visible");
    modalForm.classList.remove("feedback-modal-show");
    modalForm.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal.classList.remove("modal-visible");
      modalForm.classList.remove("feedback-modal-show");
      modalForm.classList.remove("modal-error");
    }

  })

  submitButton.addEventListener("submit", function (evt) {
    const loginForm = modal.querySelector(".login-input-form").value;
    const emailForm = modal.querySelector(".email-form-input").value;

    if (!username.value || !email.value) {
      evt.preventDefault()
      modalForm.classList.remove("feedback-modal-show");
      modalForm.classList.remove("modal-error");
      modalForm.offsetWidth = modalForm.offsetWidth;
      modalForm.classList.add("modal-error");
    }
    else {
      localStorage.setItem("login", loginForm);
      localStorage.setItem("email", emailForm);
    }
  })

}

setListener(menuList, "click", function () {
  catalogMenu.classList.toggle("display-menu");
});

setListener(search, "click", function () {
  searchWrapper.classList.toggle("display-search")
});

setListener(userLogin, "click", function () {
  loginWrapper.classList.toggle("display-login");
});

setListener(activeCart, "click", function () {
  cartWrapper.classList.toggle("display-cart");
});
