var menuBtn = document.querySelector(".navbar-toggler");
var menu = document.querySelector(".menu-items");
var menucls = document.querySelector(".cls");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
menucls.addEventListener("click", function () {
  menu.classList.toggle("active");
});
