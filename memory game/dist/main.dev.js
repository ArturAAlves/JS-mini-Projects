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
var cartaUm;
var cartaDois;
var clicks = 0;
var moves = document.querySelector(".moves");

var _loop = function _loop(i) {
  card[i].addEventListener("click", function () {
    clicks += 1;
    moves.innerHTML = clicks;
    console.log(clicks);
    card[i].classList.add('flipped');
    if (cartaUm != undefined && cartaDois == undefined) cartaDois = cardBack[i].style.backgroundImage;
    if (cartaUm == undefined) cartaUm = cardBack[i].style.backgroundImage;

    if (cartaUm == cartaDois) {
      for (var u = 0; u < card.length; u++) {
        if (hasClass(card[u], 'flipped')) {
          card[u].classList.add('locked');
        }
      }
    } else if (cartaDois != undefined) {
      var _loop3 = function _loop3(_u) {
        if (!hasClass(card[_u], 'locked')) setTimeout(function () {
          card[_u].classList.remove('flipped');
        }, 1000);
      };

      for (var _u = 0; _u < card.length; _u++) {
        _loop3(_u);
      }
    }

    clearCards();
  });
};

for (var i = 0; i < card.length; i++) {
  _loop(i);
}

function clearCards() {
  if (cartaDois != undefined) {
    cartaUm = undefined;
    cartaDois = undefined;
  }
}

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function randomize() {
  var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var novoArray = [];

  for (var _i = numberStore.length; _i >= 0; _i--) {
    var copyArray = numberStore;
    var randomNumber = Math.floor(Math.random() * _i);
    novoArray.push(copyArray[randomNumber]);
    copyArray.splice(randomNumber, 1);
  }

  var _loop2 = function _loop2(_i2) {
    cardBack[_i2].style.backgroundImage = "url(\"".concat(images[novoArray[_i2]].img, "\")");
    setTimeout(function () {
      card[_i2].classList.add('flipped');
    }, 500);
    setTimeout(function () {
      card[_i2].classList.remove('flipped');
    }, 2000);
  };

  for (var _i2 = 0; _i2 < cardBack.length; _i2++) {
    _loop2(_i2);
  }
}

randomize();
var novojogo = document.querySelector(".novojogo");
novojogo.addEventListener("click", function () {
  location.reload();
});