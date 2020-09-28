const imgToggle = document.querySelectorAll(".img");
const imgContainer = document.querySelector("#main-section");
const burguer = document.querySelector(".burguer");
const bar = document.querySelectorAll(".bar");
const navbar = document.querySelector(".navbar-links");
const html = document.querySelector("html");

for (let i = 0; i < imgToggle.length; i++) {
  imgToggle[i].addEventListener("click", function () {
    imgToggle[i].classList.toggle("img-toggle");
  });
}

burguer.addEventListener("click", function () {
  navbar.classList.toggle("toggle-menu");
  for (let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle("bar-w");
    bar[0].classList.toggle("bar1-active");
    bar[1].classList.toggle("bar2-active");
    bar[2].classList.toggle("bar3-active");
  }
  html.classList.toggle("html-overflow");
});
