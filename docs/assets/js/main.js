const btn = document.getElementById("burger");
const nav = document.getElementById("menu");

const close_menu = document.getElementById("close-menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

close_menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
var swiper = new Swiper(".rooms__swiper", {
  // Optional parameters
  slidesPerView: "auto",
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: ".rooms__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".rooms__btn-next",
  },
  breakpoints: {
    // when window width is >= 426px
    426: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    500: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});

var swiperInspirations = new Swiper(".inspirations__swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: ".inspirations__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".inspirations__navigation-next",
    prevEl: ".inspirations__navigation-prev",
  },
});
console.log(3)

const navItems = document.querySelectorAll(".nav-mobile__item");

navItems.forEach((element) =>
  element.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
  })
);