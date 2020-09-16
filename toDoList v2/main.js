const input = document.querySelector(".input");
const btnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");
const list = document.getElementsByClassName("list");

let store = [""];
let counter = -1;


const btnRemove = document.getElementsByClassName("btn-recliclar");


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
                    <h5 class="text-info ">${input.value}</h5>
                </div>
                <div class="icons">
                    <span class="btn-done icon"><i class="far fa-check-circle"></i></i></span>
                    <span class="btn-recliclar icon"><i class="far fa-trash-alt"></i></span>
                </div>
 `
        createDivList.innerHTML = Html;
        todoList.appendChild(createDivList)
        input.value = "";
        removeToDo(counter);
        doneToDo(counter);
    }
})

const done = document.getElementsByClassName("btn-done")

function removeToDo(counter) {
    btnRemove[counter].addEventListener("click", () => {
        console.log(counter)
        list[counter].classList.add("hide-list")
        btnRemove[counter].classList.add("recicle-animation")
    })
}

const textInfo = document.getElementsByClassName("text-info")

function doneToDo(counter) {
    done[counter].addEventListener("click", () => {
        textInfo[counter].classList.toggle("overline")
        done[counter].classList.toggle("btn-not-done")
        currentTime()
    })
}

const clear = document.querySelector(".btn-clear")
clear.addEventListener("click", () => {
    todoList.innerHTML = "";
    input.value = "";
})






// function currentTime() {
//     const date = new Date(); /* creating object of Date class */
//     const hour = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     hour = hour < 10 ? "0" + hour : hour;
//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;
//     document.getElementById("clock").innerText =
//         hour + " : " + min + " : " + sec;
// }