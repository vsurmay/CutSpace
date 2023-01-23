const headerForm = document.querySelector(".header__form");
const headerInput = document.querySelector(".header__form-input");

headerInput.addEventListener("focus", () => {
  headerForm.classList.add("header__form-active");
});

headerInput.addEventListener("blur", () => {
  headerForm.classList.remove("header__form-active");
});

//======= burder ==========

const burger = document.querySelector(".burger__menu");
const burgerItem = document.querySelectorAll(".burger__menu-item");
const popup = document.querySelector(".popup");

function showMenu() {
  burgerItem.forEach((item, index) =>
    item.classList.toggle(`burger__item${index}-active`)
  );
  popup.classList.toggle("popup-active");
}

function clickLinkOnPopop(event) {
  const el = event.target.closest(".popup__list-link");
  if (!el) return;
  showMenu();
}

popup.addEventListener("click", clickLinkOnPopop);
burger.addEventListener("click", showMenu);
