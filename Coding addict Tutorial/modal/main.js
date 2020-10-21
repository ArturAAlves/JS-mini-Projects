const btnOpen = document.querySelector(".btn")
const btnClose = document.querySelector(".close")
const modal = document.querySelector(".modal-container")


btnOpen.addEventListener("click", function () {
    modal.classList.add("modal-container-active")
})

btnClose.addEventListener("click", function () {
    modal.classList.remove("modal-container-active")
})