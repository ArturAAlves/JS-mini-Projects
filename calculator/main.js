const btnReset = document.querySelector(".btn-reset")
const btnDel = document.querySelector(".btn-del")
const btnEquals = document.querySelector(".btn-equals")
const btn = document.querySelectorAll(".btn")
const input = document.querySelector(".input-first")
const inputLast = document.querySelector(".input-last")


btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        let valor = e.target.dataset.btn;
        input.value += valor;
    })
});

btnReset.addEventListener("click", () => {
    input.value = "";
})

btnDel.addEventListener("click", () => {
    input.value = input.value.slice(0, -1)

})

btnEquals.addEventListener("click", () => {
    if (input.value == "") {
        input.value = "Por favor insira valores"

    } else {
        let resultado = eval(input.value);
        console.log(resultado)
        input.value = resultado;
    }
})