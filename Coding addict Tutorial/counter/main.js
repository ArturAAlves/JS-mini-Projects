const number = document.querySelector(".number")
const decrease = document.querySelector(".btn-decrease")
const reset = document.querySelector(".btn-reset")
const increase = document.querySelector(".btn-increase")
const btns = document.querySelectorAll(".btn")
let counter = 0


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let validate = e.currentTarget.classList
        if (validate.contains("btn-decrease")) {
            counter--
        }
        else if (validate.contains("btn-increase")) {
            counter++
        }
        else {
            counter = 0
        }

        if (counter == 0) {
            number.style.color = "black"
        } else if (counter < 0) {
            number.style.color = "red"
        } else {
            number.style.color = "green"
        }
        number.innerHTML = counter
    })
});





// decrease.addEventListener("click", function () {
//     counter--
//     output(counter)
// })

// increase.addEventListener("click", function () {
//     counter++
//     output(counter)
// })

// reset.addEventListener("click", function () {
//     counter = 0
//     output(counter)
// })


// function output() {
//     if (counter > 0) {
//         number.style.color = "green"
//     }
//     if (counter < 0) {
//         number.style.color = "red"
//     }
//     if (counter == 0) {
//         number.style.color = "black"
//     }
//     number.innerHTML = counter
// }

// output()