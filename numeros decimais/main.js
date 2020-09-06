const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let number = Number.parseFloat((Math.random() * 10).toFixed(1));
  let decimialRest = Number.parseFloat((number % 1));
  console.log(number)
  number = number - decimialRest;


  if (decimialRest <= 0.3) {
    decimialRest = 0
  } else if (decimialRest >= 0.7) {
    decimialRest = 1
  } else {
    decimialRest = 0.5;
  }

  console.log(decimialRest)

  input.innerText = number + decimialRest;
});
