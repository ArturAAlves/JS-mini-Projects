const btnAcessories = document.querySelector(".acessoires-item-btn")
const acessoriesBox = document.querySelector(".acessoires-block-item")
const acessoiresInfo = document.querySelector(".acessoires-info")
const acessoriesBtn = document.querySelector(".acessoires-item-btn-container")
const navBar = document.querySelector(".nav-container")
const liksContainer = document.querySelector(".links-container")
const goUp = document.querySelector(".go-up")
const itemsContainer = document.querySelector(".items-container")
const itemInfoBox = document.querySelector(".item-info")
const btnDetails = document.querySelector(".item-details")

//-------- cart ------//
const cart = document.querySelector(".cart")
const cartClose = document.querySelector(".cart-close")
const cartOverlay = document.querySelector(".cart-global-container")
const cartContainer = document.querySelector(".cart-container")
const cartItemList = document.querySelector(".cart-item-list")
const itemsInCart = document.querySelector(".item-in-cart")
const limparCarrinho = document.querySelector(".limpar-carrinho")
const cartSubtotal = document.querySelector(".Subtotal-value")





//cart
let carrinho = []
let ButtonsDOM = []


//gettting the products 
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json')
            let data = await result.json()
            let products = data.items
            products = products.map(item => {
                const { title, price } = item.fields
                const { id } = item.sys
                const image = item.fields.image.fields.file.url
                return { title, price, id, image }
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }
}

//display products 
class UI {
    displayProducts(products) {
        // let novo = []
        // for (let i = 0; i < 4; i++) {
        //     novo.push(products[i])
        // }
        // console.log(novo)
        let printProducts = products.map(function (product) {
            return `
             <div class="item">
          <button class="add-cart-btn" data-id=${product.id}>
            <i class="fas fa-cart-plus"> Add Cart</i>
          </button>
          <div class="best-seller">Mais Vendido</div>
          <img src=${product.image} alt="" class="item-photo">
          <div class="item-info">
            <button class="item-details" >
              Ver Detalhes
            </button>
            <p class="item-name">${product.title}</p>
            <p class="item-price">${product.price}</p>
          </div>
        </div>`
        }).join("")
        itemsContainer.innerHTML = printProducts

    }
    getBagButtons() {
        const addCartBtns = [...document.querySelectorAll(".add-cart-btn")]
        ButtonsDOM = addCartBtns
        addCartBtns.forEach(cartBtn => {
            let btnId = cartBtn.dataset.id
            let inCart = carrinho.find(item => item.id === btnId)
            if (inCart) {
                cartBtn.innerHTML = "In Cart"
                cartBtn.disabled = true
            }
            cartBtn.addEventListener("click", (event) => {
                // carrinho.push(btnId)
                // console.log(carrinho)
                event.currentTarget.innerHTML = "In Cart"
                event.currentTarget.disabled = true
                //get product from products
                let cartItem = { ...Storage.getProduct(btnId), amount: 1 }
                //add products to the cart
                carrinho = [...carrinho, cartItem]
                //save cart in local storage
                Storage.saveCart(carrinho)
                //set cart values
                this.setCartValues(carrinho)
                //display cart item
                this.addCartItem(cartItem)
                //setUp
                openCart(event)
                itemsInCart.innerText = carrinho.length

            })
        });
    }
    setCartValues(carrinho) {
        let tempTotal = 0
        let itemsTotal = 0
        carrinho.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        itemsInCart.innerText = parseFloat(itemsTotal.toFixed(2))
        cartSubtotal.innerText = tempTotal.toFixed(2)

    }

    addCartItem(item) {
        const li = document.createElement("li")
        li.classList.add("cart-item")
        li.innerHTML =
            `      <img class="cart-item-img" src="${item.image}"></img>
                  <div class="cart-item-info">
                    <p class="cart-item-name">${item.title}</p>
                    <p class="cart-item-price">${item.price}$</p>
                    <div class="cart-item-amount">
                      <button class="cart-item-amount-less cart-item-box" data-id=${item.id}>
                        -
                      </button>
                      <p class="cart-item-amount-content cart-item-box" >${item.amount}</p>
                     <button class="cart-item-amount-plus cart-item-box" data-id=${item.id}>
                        +
                      </button>
                    
                    </div>
                    <div class="cart-amount"> </div>
                  </div>
                  <button class="cart-item-close" data-id=${item.id}>
                           x  
                  </button>
               `
        cartItemList.appendChild(li)

    }
    setupApp() {
        carrinho = Storage.getCart()
        this.setCartValues(carrinho)
        this.populate(carrinho)
    }
    populate(carrinho) {
        carrinho.forEach(item => {
            this.addCartItem(item)
        });
    }
    cartLogic() {
        //clear cart button
        limparCarrinho.addEventListener("click", () => {
            this.clearCart()
            hideCart()
        })
        //cart functionality
        cartContainer.addEventListener("click", (event) => {
            // console.log(event.target)
            let addBtn = "cart-item-amount-plus"
            let subBtn = "cart-item-amount-less"

            if (event.target.classList.contains("cart-item-close")) {
                let removeItem = event.target
                let id = removeItem.dataset.id
                cartItemList.removeChild(removeItem.parentElement)
                this.removeItem(id)
            }

            else if (event.target.classList.contains("cart-item-amount-plus")) {
                let addAmount = event.target
                let id = addAmount.dataset.id
                let tempItem = carrinho.find(item => item.id === id)
                tempItem.amount = tempItem.amount + 1
                Storage.saveCart(carrinho)
                this.setCartValues(carrinho)
                addAmount.previousElementSibling.innerText = tempItem.amount
            }

            else if (event.target.classList.contains("cart-item-amount-less")) {
                let lowerAmount = event.target
                let id = lowerAmount.dataset.id
                let tempItem = carrinho.find(item => item.id === id)
                tempItem.amount = tempItem.amount - 1
                if (tempItem.amount > 0) {
                    Storage.saveCart(carrinho)
                    this.setCartValues(carrinho)
                    addAmount.nextElementSibling.innerText = tempItem.amount
                    console.log()
                }
                else {
                    cartItemList.removeChild(lowerAmount.parentElement.parentElement)
                }




            }

        })
    }

    clearCart() {
        let cartItems = carrinho.map(item => item.id)
        cartItems.forEach(id => this.removeItem(id))
        while (cartItemList.children.length > 0) {
            cartItemList.removeChild(cartItemList.children[0])
        }
    }

    removeItem(id) {
        carrinho = carrinho.filter(item => item.id !== id)
        this.setCartValues(carrinho)
        Storage.saveCart(carrinho)
        let button = this.getSingleButton(id)
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-cart-plus"> Add Cart</i>`
    }

    getSingleButton(id) {
        return ButtonsDOM.find(button => button.dataset.id === id)
    }
}


//local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'))
        return products.find(product => product.id === id)
    }

    static saveCart(carrinho) {
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }

    static getCart() {
        return localStorage.getItem("carrinho") ? JSON.parse(localStorage.getItem("carrinho")) : []
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const ui = new UI()
    const products = new Products()
    //setup app
    ui.setupApp()
    //get all products
    products.getProducts().then(products => ui.displayProducts(products))
    products.getProducts().then(products => {
        ui.displayProducts(products)
        Storage.saveProducts(products)
    }).then(() => {
        ui.getBagButtons()
        ui.cartLogic()
    })
})




acessoriesBox.addEventListener("mouseenter", (e) => {
    acessoiresInfo.classList.add("ghost")
    acessoriesBtn.classList.remove("ghost")
})

acessoriesBox.addEventListener("mouseleave", (e) => {
    acessoiresInfo.classList.remove("ghost")
    acessoriesBtn.classList.add("ghost")
})


function openCart(e) {
    e.preventDefault()
    cartClose.classList.remove("cart-close-after")
    cartContainer.classList.remove("ghost")
    cartContainer.classList.add("cart-in")
    cartOverlay.classList.remove("ghost")
    goUp.classList.add("ghost")
}

cart.addEventListener("click", function (e) {
    openCart(e)
})

cartClose.addEventListener("click", function (e) {
    e.preventDefault()
    hideCart()
})

cartOverlay.addEventListener("click", function (e) {
    e.preventDefault()
    hideCart()
})

function hideCart() {
    acessoriesBtn.classList.add("ghost")
    cartContainer.classList.remove("cart-in")
    cartOverlay.classList.add("ghost")
    cartClose.classList.add("cart-close-after")
    setTimeout(function () {
    }, 600);
}

///// Scroll /////

window.addEventListener("DOMContentLoaded", function () {
    windowListner()
})

function windowListner() {
    window.addEventListener("scroll", function () {
        let pageHeight = window.pageYOffset
        let navHeight = navBar.getBoundingClientRect().height
        if (navHeight < pageHeight) {
            navBar.classList.add("fixed")
            liksContainer.classList.add("ghost")
            navBar.style.backgroundColor = 'rgba(255,255,255,0.9)'.replace(/[^,]+(?=\))/, '0.9')
        }
        else {
            navBar.classList.remove("fixed")
            liksContainer.classList.add("remove")
            liksContainer.classList.remove("ghost")
            navBar.style.backgroundColor = "white"
            goUp.classList.add("ghost")

        }
        if (navHeight + 500 < pageHeight) {
            goUp.classList.remove("ghost")
            if (cartContainer.classList.contains("cart-in")) {
                goUp.classList.add("ghost")
            }
        }
    })
}

