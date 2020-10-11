//Events
//addEvenListener()
//What event, what to do

const container = document.querySelector(".container")
container.addEventListener("click", contains)
function contains() {
    const hasClass = container.classList.contains("gray")
    if (hasClass) {
        container.classList.remove("gray")
    } else {
        container.classList.add("gray")
    }
}



//CSS
// const container = document.querySelector(".container")
// console.log(container.style)
// // container.setAttribute("style", "background-color:aqua;font-style: italic;")
// container.classList.add("red")

// container.style.fontSize = "30px"


//innerHtml
//textCotent
//innerText
// innerText is very similar to textContent, however, there are 
// important differences between them! Put simply, innerText is 
// aware of the rendered appearance of text, while textContent is not.


// const container = document.querySelector(".container")

// let novaLista = document.createElement("ul")

// novaLista.innerHTML =
//     `<li class="red">Dummy</li>
//      <li class="gray">Dummy</li>
//      <li class="gray">Dummy</li>
//      <li class="red">Dummy</li>`


// container.append(novaLista)






//remove
//removeChild
// const list = document.querySelector(".list")
// const li = document.querySelector(".red")


// li.remove()
// list.removeChild(li)




//Prepend
//InnerText

// const container = document.querySelector(".container")
// const heading = document.createElement("h2")
// heading.innerText = `Hello world, why are u ghe`
// heading.classList.add("red", "gray")

// container.prepend(heading)





//createElement ("element")
//CreateTextNode ("text contetent")
//elemeent.appendChild(childElement)
//apend
//replace.child
//1.append accepts Node objects and DOMStrings while .appendChild accepts only Node objects
//2.append does not have a return value while .appendChild returns the appended Node object
//3.append allows you to add multiple items while appendChild allows only a single item

// const container = document.querySelector(".container")
// const li = document.querySelector("h2")
// console.log(li)


// const newLi = document.createElement("h3")
// const text = document.createTextNode("Esta é um novo li")
// newLi.classList.add("gray")

// newLi.appendChild(text)

// container.replaceChild(newLi, li)









// const container = document.querySelector(".container")



// const h3 = document.createElement("h3")
// h3.textContent = "hellooo"

// const text = document.createTextNode(" hellllo")

// h3.appendChild(text)


// document.body.insertBefore(h3, container)


// container.insertAdjacentElement("afterend", h3)


// const apeend = container.appendChild(h3)
// console.log(apeend)



//className = adiciona mas remove todas as classes
//C
// const li = document.querySelector(".red")
// const simbling = li.nextElementSibling
// simbling.classList.add("red", "gray")
// // simbling.classList.add("gray")

// console.log(simbling.classList)

// let teste = simbling.classList.contains("ss")

// if (teste) {
//     console.log(`tem gray`)
// } else {
//     console.log(`nao tem gray`)
// }


// const list = document.querySelector(".list")
// const siblings = list.children
// const nSiblings = [...siblings]

// nSiblings.forEach(element => {
//     element.setAttribute("class", "red")
// });

// console.log(siblings)
// console.log(nSiblings)
// const list = document.querySelector(".list")

// const last = list.lastElementChild

// last.setAttribute("class", "gay")


// console.log(last.getAttribute("class"))


// const links = document.querySelector(".first")

// const newClass = links.getAttribute("id")

// console.log(newClass)


// Selectors and "navigation"
// const list = document.querySelector(".first")

// console.log(list.textContent)




// const siblings = document.querySelector(".first")

// const nsiBling = siblings.nextSibling.nextSibling.style.color = "yellow"
// const lastSibling = siblings.previousSibling.previousSibling.style.color = "yellow"


// console.log(siblings.nextElementSibling)


// const list = document.querySelector(".list")
// console.log(list.children)
// const parent = list.parentElement
// parent.style.backgroundColor = "red"





// const btn = document.querySelectorAll(".btn")
// const lista = document.querySelectorAll(".li")
// console.log(btn)

// btn.style.width = "150px"
// btn.style.height = "150px"
// btn.style.border = "5px solid blue"

// console.log(btn)
// btn.forEach(element => {
//     element.style.color = "red"
// });


// lista[2].style.color = "red"

// const listaMelhor = [...lista]
// console.log(lista)

// listaMelhor.forEach(function (elemento) {
//     elemento.style.fontSize = "30px"
// });

// console.log(listaMelhor)

// console.log(btn)














// document.querySelectorAll(".btn").forEach((hello) => {
//     hello.addEventListener("click", () => {
//         alert("hello")
//     })
// })

// let car = "hello's how are you"


// console.log(name)

// const array = ["teste", "teste2", "teste3"]
// console.log(array)



// function area(largura, altura) {
//     let area = largura * altura
//     console.log("A area da parede é " + area + " Metros quadrados")
// }

// let largura = 10
// let altura = 10


// area(largura, altura)



// function ToCm(inch) {
//     let calc = inch * 2.54
//     console.log(`Os seus ${ inch } ", correspondem a ${calc} centimetros`)
// }
// ToCm(6.5)

// let area = (altura, largura) => altura + largura
// console.log(area(5, 3))


// const person = {
//     name: "Raul",
//     lastName: "Pedro",
//     age: 40,
//     education: false,
//     married: true,
//     siblings: ["anna", "pedrito", "pino"],
//     greeting: function () {
//         console.log("hello world")

//     }
// }

// console.log(person)


// let bigger = function (num1, num2) {
//     if (num1 > num2) {
//         console.log(`O numero ${num1}, é maior que o ${num2}`)
//     }
//     else if (num1 === num2) {
//         console.log(`O numero ${num2}, é igual ao ${num1}`)
//     } else {
//         console.log(`O numero ${num2}, é maior que o ${num1}`)
//     }
// }



// bigger(4, 4)


// const dice = 0

// switch (dice) {
//     case 1: {
//         console.log("you rolled one")
//     }
//         break
//     case 2: {
//         console.log("you rolled two")
//     }
//         break
//     case 3: {
//         console.log("you rolled three")
//     }
//         break
//     case 4: {
//         console.log("you rolled four")
//     }
//         break
//     case 5: {
//         console.log("you rolled five")
//     }
//         break
//     case 6: {
//         console.log("you rolled six")
//     }
//         break
//     default: {
//         console.log("you need to roll again")
//     }
//         break
// }

// const names = ["maria", "ines", "filipa"]
// const teste = "Sapo"
// let newArray = []


// for (let i = 0; i < names.length; i++) {
//     // newArray.push(names[i] + " " + teste)
//     newArray.push(`${names[i]} ${teste}`)
//     console.log(newArray)
// }

// const gas = [20, 30, 55]
// const food = [5, 5, 5]

// function calculateTotal(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     } if (total > 100) {
//         console.log("your are speending too mutch money")
//         return total

//     }
//     console.log("you are under the budget")

//     return total
// }


// const totalGas = calculateTotal(gas)
// const totalFood = calculateTotal(food)

// const totalExpenses = { gas: totalGas, food: totalFood, total: totalGas + totalFood }
// console.log(totalExpenses)ç


// let person = { name: "bob", s: "rui", ssss: "maria" }
// let person2 = { ...person }
// person2.name = "quim"
// console.log(person)
// console.log(person2)


// truthy and falsy

// Falsy values "" ,'', ``, null . undifined , NaN, 0 , -0 , false 

// const falsty = undefined

// if (falsty) {
//     console.log("true")
// } else {
//     console.log("false")
// }



// const value = 1 == 3

// if (value) {
//     console.log(`é verdade`)
// } else {
//     console.log(`é mentira`)

// }

// value ? console.log(`é verdade`) : console.log(`é mentira`)

// function morning() {
//     return `good Morning`
// }

// function caps(newGuy) {
//     return `Your name in caps is ${newGuy.toUpperCase()}`
// }

// function lower(newGuy) {
//     return `Your name in Lower Is ${newGuy.toLowerCase()}`
// }



// function greet(newGuy) {
//     const myName = "john"
//     console.log(`Hi ${newGuy} , my name is ${myName}, ${morning()}.${caps(newGuy)}.${lower(newGuy)}  `)

// }

// greet("Rui", morning, caps, lower)

// forEach


// const trabalhadores = [
//     { nome: "Rui", idade: 20, trabalho: "Designer", id: 1, salary: 300 },
//     { nome: "Pedro", idade: 25, trabalho: "Programador", id: 2, salary: 300 },
//     { nome: "Marcio", idade: 30, trabalho: "Boss", id: 3, salary: 600 },
// ]


//Reduce  - Reduce recebe um "total" ou acumulador e o elemento a ser selecionado  
// const salarios = trabalhadores.reduce((total, trabalhador) => {
//     console.log(`O salario do ${trabalhador.nome}  é de ${trabalhador.salary} semanal`)
//     total += trabalhador.salary
//     return total
// }, 0)


// console.log(salarios)


//Find to retur unique values

// const filtro = trabalhadores.find(trabalhador => {
//     return trabalhador.id === 1
// })

// console.log(filtro)

// const objetos = ["casa", "carro", "mota", "chaves"]

// console.log(
//     objetos.find(function (objeto) {
//         return objeto === "carro"
//     }))







// const idadeFiltro = trabalhadores.filter(trabalhadores => {
//     return trabalhadores.idade <= 25
// })

// console.log(idadeFiltro)



// function showPerson(person) {
//     console.log(person.trabalho.toUpperCase())
// }
// trabalhadores.forEach(showPerson)

// trabalhadores.forEach(){

// }


// const novo = trabalhadores.forEach(element => {
//     console.log(`${element.nome} , ${element.idade} , ${element.trabalho}`)
//     return `${element.nome} , ${element.idade} , ${element.trabalho}`
// });

// console.log(novo)


// document.body.innerHTML = novo.join("")
// console.log(novo)

// const novoArray = trabalhadores.map(element => {
//     return `<H1>${element.nome} , ${element.idade} , ${element.trabalho}</H1>   `

// });


// document.body.innerHTML = novoArray.join("")
// console.log(novoArray)
// trabalhadores.forEach(Element => {
//     console.log(Element)
// });

// const novo = trabalhadores.map(function (hello) {
//     return { nome: hello.nome, idade: hello.idade + 1 }
// })

// const persons = novo.map(pessoas => {
//     return `<h1>${pessoas.nome}</h1> 
//             <h3>${pessoas.idade}</h3>

//     `
// })

// document.body.innerHTML = persons.join("")


// console.log(novo)


// Math
//objetos de arimetica. 
// Math.floor() - arrendonda para baixo
// Math.ceil() - arrendonda para baixo

// const number = 5.64564646

// const ceil = Math.ceil(number)
// console.log(ceil)

// const floor = Math.floor(number)
// console.log(floor)

// const square = Math.sqrt(number)
// console.log(square)

// const pi = Math.PI
// console.log(pi)

// const minimo = Math.min(1, 2, 3, 4, 6)
// console.log(minimo)


// const max = Math.max(1, 2, 3, 4, 6)
// console.log(max)

// const result = Math.max(1, 2, 3, 4, 6)

// const result = Math.floor(Math.random() * 10) + 1
// console.log(result)

// const months = [
//     "Janeiro",
//     "Feveriro",
//     "Março",
//     "Abril",
//     "Maio",
//     "junho",
//     "julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro"]

// const dias = [
//     "Domingo",
//     "Segunda",
//     "terça",
//     "Quarta",
//     "Quinta",
//     "Sexta",
//     "Sabado"
// ]


// //Date
// const date = new Date()
// // console.log(months[date.getMonth()])
// // console.log(dias[date.getDay()])
// // console.log(date.getDate())

// console.log(`Bom dia  hoje é dia ${date.getDate()},  ${dias[date.getDay()]}. Estamos no mês de ${months[date.getMonth()]} do ano ${date.getFullYear()}.`)


