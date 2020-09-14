const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

  let number = (Math.random() * 10).toFixed(1);
  input.innerText = number;
  var store = (number % 1).toFixed(1);
  var endNumber = number - store;
  console.log(store);

  if (store <= 0.3) {
    store = 0;
  } else if (store > 0.7) {
    store = 1;
  } else if (store > 0.3) {
    store = 0.5;
  }

  console.log(store);
  console.log(store);

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
  console.log(decimialRest)
  input.innerText = number + decimialRest;


});
