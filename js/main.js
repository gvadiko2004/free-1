const btn = document.querySelector(".hero__btn");
const btnClose = document.querySelector(".btn-close");
const formPopup = document.querySelector(".form__popup");

btn.addEventListener("click", function () {
  formPopup.classList.add("active");
});

btnClose.addEventListener("click", function () {
  formPopup.classList.remove("active");
});

const clientLink = document.querySelectorAll(".about__list-item");

clientLink.forEach((link) => {
  link.addEventListener("click", function () {
    formPopup.classList.add("active");
  });
});

const headertLink = document.querySelectorAll(".header__list-link");

headertLink.forEach((headlink) => {
  headlink.addEventListener("click", function () {
    formPopup.classList.add("active");
  });
});

const footertLink = document.querySelectorAll(".footer__list-link");

footertLink.forEach((footlink) => {
  footlink.addEventListener("click", function () {
    formPopup.classList.add("active");
  });
});

const infoLink = document.querySelectorAll(".info__pay-btn");

infoLink.forEach((inflink) => {
  inflink.addEventListener("click", function () {
    formPopup.classList.add("active");
  });
});

const footLink = document.querySelectorAll(".footer__list-link");

footLink.forEach((footerlink) => {
  footerlink.addEventListener("click", function () {
    formPopup.classList.add("active");
  });
});
