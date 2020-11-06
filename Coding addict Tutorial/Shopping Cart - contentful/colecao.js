const btnAcessories = document.querySelector(".acessoires-item-btn")
const acessoriesBox = document.querySelector(".acessoires-block-item")
const acessoiresInfo = document.querySelector(".acessoires-info")
const acessoriesBtn = document.querySelector(".acessoires-item-btn-container")
const navBar = document.querySelector(".nav-container")
const liksContainer = document.querySelector(".links-container")
const goUp = document.querySelector(".go-up")
//-------- cart ------//
const cart = document.querySelector(".cart")
const cartClose = document.querySelector(".cart-close")
const cartOverlay = document.querySelector(".cart-global-container")
const cartContainer = document.querySelector(".cart-container")
const cartItemList = document.querySelector(".cart-item-list")


//cart
// let cart = []


//gettting the products 
class Products {

}


//display products 
class UI {

}

//local storage
class Storage {

}


document.addEventListener("domcontentLoaded", function () {
    const ui = new UI()
    const products = new Products()
})




cart.addEventListener("click", function (e) {
    e.preventDefault()
    cartClose.classList.remove("cart-close-after")
    cartContainer.classList.remove("ghost")
    cartContainer.classList.add("cart-in")
    cartOverlay.classList.remove("ghost")
    goUp.classList.add("ghost")
})

cartClose.addEventListener("click", function (e) {
    e.preventDefault()
    hideCart()
})

cartOverlay.addEventListener("click", function (e) {
    e.preventDefault()
    hideCart()
})

function hideCart() {
    cartContainer.classList.remove("cart-in")
    cartOverlay.classList.add("ghost")
    cartClose.classList.add("cart-close-after")
    setTimeout(function () {
    }, 600);
}

///// Scroll /////

window.addEventListener("DOMContentLoaded", function () {
    windowListner()
})

function windowListner() {
    window.addEventListener("scroll", function () {
        let pageHeight = window.pageYOffset
        let navHeight = navBar.getBoundingClientRect().height
        if (navHeight < pageHeight) {
            navBar.classList.add("fixed")
            liksContainer.classList.add("ghost")
            navBar.style.backgroundColor = 'rgba(255,255,255,0.9)'.replace(/[^,]+(?=\))/, '0.9')
        }
        else {
            navBar.classList.remove("fixed")
            liksContainer.classList.add("remove")
            liksContainer.classList.remove("ghost")
            navBar.style.backgroundColor = "white"
            goUp.classList.add("ghost")

        }
        if (navHeight + 500 < pageHeight) {
            goUp.classList.remove("ghost")
            if (cartContainer.classList.contains("cart-in")) {
                goUp.classList.add("ghost")
            }
        }
    })
}

