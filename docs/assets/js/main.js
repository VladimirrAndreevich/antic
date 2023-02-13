const btn = document.getElementById("burger");
const nav = document.getElementById("menu");
const closeBlock = document.getElementById("close-block");
const close_menu = document.getElementById("close-menu");

function toggleScroll() {
  document.body.classList.toggle("stop-scrolling");
}

btn.addEventListener("click", () => {
  closeBlock.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  toggleScroll();
});

closeBlock.addEventListener("click", () => {
  closeBlock.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  toggleScroll();
});

close_menu.addEventListener("click", () => {
  closeBlock.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  toggleScroll();
});

const navLinks = document.getElementsByClassName("nav-mobile__link");
for (let index = 0; index < navLinks.length; index++) {
  navLinks[index].addEventListener("click", () => {
    toggleScroll();
    closeBlock.classList.toggle("hidden");
    nav.classList.toggle("hidden");
  });
}
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