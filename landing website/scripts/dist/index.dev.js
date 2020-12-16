"use strict";

//Menu 
var html = document.documentElement;
var navBtn = document.querySelector(".nav-btn");
var navBg = document.querySelector(".nav-bg");
var navMenu = document.querySelector(".nav-menu");
var btnLink = document.querySelectorAll(".nav-menu-item");
var navBar = document.querySelectorAll(".nav-btn-bar");
var navCross = document.querySelectorAll(".nav-btn-cross");
var cross1 = document.querySelector(".nav-btn-bar4-cross");
var cross2 = document.querySelector(".nav-btn-bar5-cross");
navBtn.addEventListener("mouseover", function () {
  navBar.forEach(function (bar) {
    bar.classList.add('nav-btn-bar-hover');
  });
});
navBtn.addEventListener("mouseout", function () {
  navBar.forEach(function (bar) {
    bar.classList.remove('nav-btn-bar-hover');
  });
}); //click open menu

navBtn.addEventListener('click', function () {
  activateMenu();
}); //click link interaction

btnLink.forEach(function (btn) {
  btn.addEventListener('click', function () {
    activateMenu();
    btnName = btn.innerText;

    if (btnName == 'Home') {
      btnName = 'index';
    }

    setTimeout(function () {
      window.location.href = "../".concat(btnName, ".html");
    }, 900);
  });
}); //click menu activation function

function activateMenu() {
  if (!navMenu.classList.contains('nav-menu-active')) {
    navBg.classList.remove('nav-background-inactive');
    navBg.classList.add('nav-background-active');
    navMenu.classList.add('nav-menu-active');
    navMenu.classList.remove('item-deactive');
    setTimeout(function () {
      html.classList.add('overflow');
    }, 500);
    navBar.forEach(function (bar) {
      bar.classList.add('display-none');
    });
    navCross.forEach(function (cross) {
      cross.classList.remove('display-none');
    });
  } else {
    navBg.classList.remove('nav-background-active');
    navBg.classList.add('nav-background-inactive');
    navMenu.classList.add('item-deactive');
    cross1.classList.add('nav-btn-bar4-cross-close');
    cross2.classList.add('nav-btn-bar5-cross-close');
    setTimeout(function () {
      navBg.classList.add('nav-background-inactive');
      navBg.classList.remove('nav-background-inactive');
      navCross.forEach(function (cross) {
        cross.classList.add('display-none');
      });
      cross1.classList.remove('nav-btn-bar4-cross-close');
      cross2.classList.remove('nav-btn-bar5-cross-close');
      navMenu.classList.remove('nav-menu-active');
      navMenu.classList.remove('item-deactive');
      navBar.forEach(function (bar) {
        bar.classList.remove('display-none');
      });
    }, 600);
    html.classList.remove('overflow');
  }
} //projects


var imageScale = document.querySelectorAll(".home-page-projects-gallery-img");
imageScale.forEach(function (image) {
  image.addEventListener("mouseover", function () {
    image.classList.remove("scaledown");
    image.classList.add("scale");
  });
  image.addEventListener("mouseout", function () {
    image.classList.remove("scale");
    image.classList.add("scaledown");
  });
});