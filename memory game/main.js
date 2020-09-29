const card = document.querySelectorAll(".card")
const images = [{ id: 0, img: "./img/img1.png" }, { id: 1, img: "./img/img2.png" }, { id: 2, img: "./img/img3.png" }, { id: 3, img: "./img/img4.png" }, { id: 4, img: "./img/img5.png" }, { id: 5, img: "./img/img1.png" }, { id: 6, img: "./img/img2.png" }, { id: 7, img: "./img/img3.png" }, { id: 8, img: "./img/img4.png" }]
const cardBack = document.querySelectorAll(".card-back")

function click() {

    for (let i = 0; i < card.length; i++) {
        var storeOne = ""
        var storeArray = []

        card[i].addEventListener("click", function () {
            card[i].classList.add('is-flipped');
            storeOne = cardBack[i].style.backgroundImage
            storeArray.push(storeOne)
            if (storeArray[0] == storeArray[1]) {
                console.log("hello")
                storeArray = []
                click()
            }
        })
    }

}

click()

function randomize() {
    var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var novoArray = []

    for (let i = numberStore.length; i >= 0; i--) {
        var copyArray = numberStore
        var randomNumber = Math.floor(Math.random() * i);
        novoArray.push(copyArray[randomNumber])
        copyArray.splice(randomNumber, 1)
    }

    for (let i = 0; i < cardBack.length; i++) {
        cardBack[i].style.backgroundImage = `url("${images[novoArray[i]].img}")`
    }
}

randomize()
