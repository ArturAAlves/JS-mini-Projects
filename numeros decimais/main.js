const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let number = (Math.random() * 10).toFixed(1);
  input.innerText = number;
  let store = (number % 1).toFixed(1);
  let endNumber = number - store;

  if (store <= 3) {
    store = 0;
  } else if (store > 3) {
    store = 5;
  } else if (store < 7) {
    store = 1;
  }
  endNumber = number + store;
  console.log(endNumber);
});
