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

function click() {
  var _loop = function _loop(i) {
    storeOne = "";
    storeArray = [];
    card[i].addEventListener("click", function () {
      card[i].classList.add('is-flipped');
      storeOne = cardBack[i].style.backgroundImage;
      storeArray.push(storeOne);

      if (storeArray[0] == storeArray[1]) {
        console.log("hello");
        storeArray = [];
        click();
      }
    });
  };

  for (var i = 0; i < card.length; i++) {
    var storeOne;
    var storeArray;

    _loop(i);
  }
}

click();

function randomize() {
  var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var novoArray = [];

  for (var i = numberStore.length; i >= 0; i--) {
    var copyArray = numberStore;
    var randomNumber = Math.floor(Math.random() * i);
    novoArray.push(copyArray[randomNumber]);
    copyArray.splice(randomNumber, 1);
  }

  for (var _i = 0; _i < cardBack.length; _i++) {
    cardBack[_i].style.backgroundImage = "url(\"".concat(images[novoArray[_i]].img, "\")");
  }
}

randomize();