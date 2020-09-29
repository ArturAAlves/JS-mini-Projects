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

var _loop = function _loop(i) {
  card[i].addEventListener("click", function () {
    actionCard(i);
  });
};

for (var i = 0; i < card.length; i++) {
  _loop(i);
}

function actionCard(colhoes) {
  card[colhoes].classList.add('flipped');
  if (cartaUm != undefined && cartaDois == undefined) cartaDois = cardBack[colhoes].style.backgroundImage;
  if (cartaUm == undefined) cartaUm = cardBack[colhoes].style.backgroundImage;

  if (cartaUm == cartaDois) {
    for (var u = 0; u < card.length; u++) {
      if (hasClass(card[u], 'flipped')) {
        card[u].classList.add('locked');
      }
    }
  } else if (cartaDois != undefined) {
    var _loop2 = function _loop2(_u) {
      if (!hasClass(card[_u], 'locked')) setTimeout(function () {
        card[_u].classList.remove('flipped');
      }, 1000);
    };

    for (var _u = 0; _u < card.length; _u++) {
      _loop2(_u);
    }
  }

  clearCards();
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

var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var novoArray = [];

for (var _i = numberStore.length; _i >= 0; _i--) {
  var copyArray = numberStore; // console.log (copyArray)
  // console.log (numberStore)

  var randomNumber = Math.floor(Math.random() * _i);
  novoArray.push(copyArray[randomNumber]);
  copyArray.splice(randomNumber, 1);
}

for (var _i2 = 0; _i2 < cardBack.length; _i2++) {
  cardBack[_i2].style.backgroundImage = "url(\"".concat(images[novoArray[_i2]].img, "\")");
}

randomize(); // function click() {
//     for (let i = 0; i < card.length; i++) {
//         var storeOne = ""
//         var storeArray = []
//         card[i].addEventListener("click", function () {
//             card[i].classList.add('flipped');
//             storeOne = cardBack[i].style.backgroundImage
//             storeArray.push(storeOne)
//             // console.log(storeOne)
//             // console.log(storeArray)
//             if (storeArray[0] == storeArray[1]) {
//                 for (let u = 0; u < card.length; u++) {
//                     if (hasClass(card[u], 'flipped')) {
//                         card[u].classList.add('locked')
//                     }
//                 }
//             } else if (storeArray[1] != undefined) {
//                 for (let u = 0; u < card.length; u++) {
//                     if (!hasClass(card[u], 'locked'))
//                         setTimeout(function () {
//                             card[u].classList.remove('flipped')
//                         }, 1000);
//                 }
//             }
//         })
//     }
// }