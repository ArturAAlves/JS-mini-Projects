const cartBtn = document.querySelector(".btn-cart")
const cartListContainer = document.querySelector(".cart-list-container")
const cartList = document.querySelector(".cart-list")
const smatphones = document.querySelectorAll(".card")
const btnBuy = document.querySelectorAll(".btn-comprar")
const total = document.querySelector(".cart-result")


cartBtn.addEventListener("click", () => {
    cartListContainer.classList.toggle("cart-list-show")
})


// btnBuy.forEach(btnBuy => {
//     btnBuy.addEventListener("click", () => {
//         console.log(smatphones[1].childNodes[3].childNodes[1].childNodes[0])
//     })
// });
var priceTotal = 0
var nome = ""
var price = ""
var counter = [];



for (let i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener("click", () => {
        name = smatphones[i].childNodes[3].childNodes[1].childNodes[0].textContent
        price = smatphones[i].childNodes[3].childNodes[5].textContent
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item")
        var html = `   
        <div class="cart-item">
            <h3 class="cart-item-name">${name} <span class="btn-recliclar"><i class="far fa-trash-alt"></i></span></h3>
            <h5 class="cart-item-price">${price}</h5>
        </div>
         <hr>
         `
        let priceNumbers = parseInt(price.replace(/\D/g, ""));
        counter.push(i)
        cartItem.innerHTML = html;
        cartList.appendChild(cartItem)
        priceTotal += priceNumbers
        console.log(priceTotal)
        total.innerText = priceTotal
        var item = i 
        console.log(item)
        remove (item) 
    })
}

function remove(item) {
    const reciclar = document.getElementsByClassName("btn-recliclar")
    console.log (item)
    reciclar[item].addEventListener("click", () => {
        console.log (item)
        const cartItem = document.getElementsByClassName("cart-item")
        cartItem[item].innerHTML = ""
        
    })
}



