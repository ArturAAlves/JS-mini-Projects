const input = document.querySelector(".input");
const btnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");
const list = document.querySelector(".list");
var store = ["teste"];
var counter = -1;

/* icons */
const done = document.querySelector(".btn-done")
const edit = document.querySelector(".btn-editar")
const clear = document.querySelector(".btn-clear")


btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert("Insert.text")
    } else {
        store.push(input.value);
        counter += 1
        let createDivList = document.createElement("div");
        createDivList.classList.add("list")
        const Html =
            `<div class="text">
                    <h5>${input.value}</h5>
                </div>
                <div class="icons">
                    <span class="btn-done icon"><i class="far fa-check-circle"></i></i></span>
                    <span class="btn-editar icon"><i class="far fa-edit"></i></span>
                    <span class="btn-recliclar icon"><i class="far fa-trash-alt"></i></span>
                </div>
 `
        createDivList.innerHTML = Html;
        todoList.appendChild(createDivList)
        input.value = "";
        click(counter);
    }
})

const remove = document.getElementsByClassName("btn-recliclar");

function click(counter) {
    remove[counter].addEventListener("click", () => {
        remove[counter].classList.add("recicle-animation")
    })
}




/* 
remove.forEach((button) => {
    button.addEventListener("click", () => {
        alert("hello")
        console.log("hello")
    })
}) */

clear.addEventListener("click", () => {
    todoList.innerHTML = "";
    input.value = "";
})