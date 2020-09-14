const card = document.querySelectorAll(".card")
const fadeIn = document.querySelectorAll(".fade-in")

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", function() {
        fadeIn[i].classList.add("hover-img")
    })
    card[i].addEventListener("mouseout", function() {
        fadeIn[i].classList.remove("hover-img")
    })
}

const btn = document.querySelectorAll(".button")
const products = document.querySelectorAll(".product")

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        e.preventDefault()

        if ((btn[i].dataset.filter) === "all") {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = "block"
            }
        }

        if ((btn[i].dataset.filter) === "cakes") {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = "block"
                if (products[i].dataset.item != "cake") {
                    products[i].style.display = "none"
                }
            }
        }

        if ((btn[i].dataset.filter) === "cupcakes") {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = "block"
                if (products[i].dataset.item != "cupcake") {
                    products[i].style.display = "none"
                }
            }
        }

        if ((btn[i].dataset.filter) === "sweets") {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = "block"
                if (products[i].dataset.item != "sweets") {
                    products[i].style.display = "none"
                }
            }
        }

        if ((btn[i].dataset.filter) === "doughnuts") {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = "block"
                if (products[i].dataset.item != "doughnut") {
                    products[i].style.display = "none"
                }
            }
        }

    })
}

function filter() {
    const searchBox = document.querySelector(".text-box")
    const storeItems = document.querySelectorAll('.product')
    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim()
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
}

filter();



const modal = document.querySelector(".modal")
const btnLeft = document.querySelector(".arrow-left")
const btnRight = document.querySelector(".arrow-right")
const img = document.querySelectorAll(".img")
const backGround = document.querySelector(".background-img")
const closeW = document.querySelector(".arrow-close")
const images = [".img/sweet1.jpg", "./img/sweet2.jpg", "./img/sweet3.jpg", "./img/cake1.jpg", "./img/cake2.jpg", "./img/cake3.jpg", "./img/doughnut1.jpg", "./img/doughnut2.jpg", "./img/doughnut3.jpg", "./img/cupcake1.jpg", "./img/cupcake2.jpg", "./img/cupcake3.jpg"]
var counter = ""

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        backGround.style.backgroundImage = `url(${images[i]})`;
        modal.classList.add("modal-display");
        counter = i;
        console.log(counter)
    })


}
btnRight.addEventListener("click", () => {
    counter = counter + 1;
    if (counter >= images.length) {
        counter = 0
    }
    backGround.style.backgroundImage = `url(${images[counter]})`;
});

btnLeft.addEventListener("click", () => {
    if (counter == 0) {
        counter = images.length
    }
    counter = counter - 1;
    console.log(counter)
    backGround.style.backgroundImage = `url(${images[counter]})`;
});

closeW.addEventListener("click", () => {

    modal.classList.remove("modal-display")
})