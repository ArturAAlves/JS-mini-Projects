const btnAcessories = document.querySelector(".acessoires-item-btn")
const acessoriesBox = document.querySelector(".acessoires-block-item")
const acessoiresInfo = document.querySelector(".acessoires-info")
const acessoriesBtn = document.querySelector(".acessoires-item-btn-container")



acessoriesBox.addEventListener("mouseenter", (e) => {

    acessoiresInfo.classList.add("ghost")
    acessoriesBtn.classList.remove("ghost")
})


acessoriesBox.addEventListener("mouseleave", (e) => {

    acessoiresInfo.classList.remove("ghost")
    acessoriesBtn.classList.add("ghost")
})

