const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const container = document.querySelector(".container");
const input = document.querySelector(".hex");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; color.length < 7; i++) {
    let rng = Math.floor(Math.random() * colorArray.length);
    color += colorArray[rng];
  }
  container.style.backgroundColor = color;
});
