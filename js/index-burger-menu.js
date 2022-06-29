const menuBody = document.querySelector(".header__nav-menu");
const iconBurger = document.querySelector(".burger");

iconBurger.addEventListener("click", function () {
  menuBody.classList.toggle("active");
  iconBurger.classList.toggle("active");
  document.body.classList.toggle("lock");
});

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function () {
    menuBody.classList.remove("active");
    document.body.classList.remove("lock");
  });
})


