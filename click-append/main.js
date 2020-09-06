var div = document.querySelector(".box");
var container = document.querySelector(".container");
var btn = document.querySelector(".btn");
var textnode = document.createTextNode("Water");

btn.addEventListener("click", function () {
  var n = 3;
  console.log(n);
  console.log(container);

  for (let i = 0; n > i; i++) {
    var createDiv = document.createElement("i");
/*     var text = document.createTextNode("Water");
 */    /* createDiv.appendChild(text); */
    createDiv.className = "box";

    container.appendChild(createDiv);
  }
});
