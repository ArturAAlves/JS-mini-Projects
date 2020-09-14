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
});
