const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const counter = document.querySelector(".counter");
let count = "";

upBtn.addEventListener("click", function () {
  counter.textContent = count++;
});

downBtn.addEventListener("click", function () {
  counter.textContent = count--;
});
