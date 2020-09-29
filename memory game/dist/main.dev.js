"use strict";

var card = document.querySelectorAll(".card");
var images = [{
  id: 0,
  img: "./img/img1.png"
}, {
  id: 1,
  img: "./img/img2.png"
}, {
  id: 2,
  img: "./img/img3.png"
}, {
  id: 3,
  img: "./img/img4.png"
}, {
  id: 4,
  img: "./img/img5.png"
}, {
  id: 5,
  img: "./img/img1.png"
}, {
  id: 6,
  img: "./img/img2.png"
}, {
  id: 7,
  img: "./img/img3.png"
}, {
  id: 8,
  img: "./img/img4.png"
}];
var cardBack = document.querySelectorAll(".card-back");

var _loop = function _loop(i) {
  card[i].addEventListener("click", function () {
    card[i].classList.toggle('is-flipped');
  });
};

for (var i = 0; i < card.length; i++) {
  _loop(i);
}

function randomize() {
  var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var novoArray = [];

  for (var _i = numberStore.length; _i >= 0; _i--) {
    var copyArray = numberStore;
    console.log(copyArray);
    var randomNumber = Math.floor(Math.random() * _i);
    novoArray.push(copyArray[randomNumber]);
    copyArray.splice(randomNumber, 1);
  }

  for (var _i2 = 0; _i2 < cardBack.length; _i2++) {
    cardBack[_i2].style.backgroundImage = "url(\"".concat(images[novoArray[_i2]].img, "\")");
  }
}

randomize(); // function randomizeNumbers() {
//     var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8]
//     var novoArray = []
//     for (let i = numberStore.length; i >= 1; i--) {
//         var copyArray = numberStore
//         var randomNumber = Math.floor(Math.random() * i);
//         novoArray.push(copyArray[randomNumber])
//         console.log(copyArray[randomNumber])
//         copyArray.splice(randomNumber, 1)
//     }
//     // console.log (novoArray)
// }
// randomizeNumbers()