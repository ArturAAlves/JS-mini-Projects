const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")
const slideContainer = document.querySelector(".slider-container")
const slides = document.querySelectorAll(".slide")
let counter = 0


slides.forEach(function (element, index) {
    let slide = element.style
    slide.left = `${index * 100}%`
});

btnNext.addEventListener("click", () => {
    counter++
    if (counter >= slides.length) {
        counter = 0
    }
    translate(counter)
})

btnPrev.addEventListener("click", () => {
    counter--

    if (counter < 0) {
        counter = (slides.length - 1)
    }
    translate(counter)
})




function translate(counter) {
    slides.forEach(function (element) {
        let slide = element.style
        slide.transform = `translateX(-${counter * 100}%)`
        console.log(slide.transform)
    });
}