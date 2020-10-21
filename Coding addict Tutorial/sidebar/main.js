const menu = document.querySelector(".menu-mobile")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const nav = document.querySelector(".nav-bar")
let active = 0

menu.addEventListener("click", function () {
    menu.classList.toggle("menu-mobile-active")
    bar1.classList.toggle("bar1-active")
    bar2.classList.toggle("bar2-active")
    nav.classList.toggle("nav-bar-show")

    if (active == 0) {
        active++
        bar1.classList.remove("bar1-remove")
        bar2.classList.remove("bar2-remove")
    } else {
        active--
        nav.classList.add("nav-bar-remove")
        bar1.classList.add("bar1-remove")
        bar2.classList.add("bar2-remove")
    }
})