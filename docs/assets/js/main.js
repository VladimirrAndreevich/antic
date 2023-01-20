const btn = document.getElementById("burger");
const nav = document.getElementById("menu");

const close_menu = document.getElementById("close-menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

close_menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
console.log(2)
console.log(3)