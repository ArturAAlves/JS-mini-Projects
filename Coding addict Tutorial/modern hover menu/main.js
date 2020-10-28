import sublinks from './data.js';


const mobileBtn = document.querySelector(".mobile-btn")
const sideBar = document.querySelector(".sidebar")
const closeSideBarBtn = document.querySelector(".sidebar-close-btn")
const sideBarLinks = document.querySelector(".sidebar-links")
const links = [...document.querySelectorAll(".link-btn")]
const subMenu = document.querySelector(".submenu")
const subMenuContainer = document.querySelector(".submenu-list")
const heroContainer = document.querySelector(".hero-container")
const main = document.querySelector(".main")

// console.log(links)
mobileBtn.addEventListener("click", function () {
    sideBar.classList.add("show")
})

closeSideBarBtn.addEventListener("click", function () {
    sideBar.classList.remove("show")
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
        sideBar.classList.remove("show")
    }
});

links.forEach((btn) => {
    btn.addEventListener("mouseover", function (e) {
        const text = e.currentTarget.textContent
        const positionBtn = e.currentTarget.getBoundingClientRect()
        const bottom = positionBtn.bottom - 3
        const center = (positionBtn.left + positionBtn.right) / 2
        subMenu.style.left = `${center}px`
        subMenu.style.top = `${bottom}px`
        subMenu.classList.add("display")

        // const printBtn = sublinks.find(({ page }) => page === text.toLowerCase())
        // console.log(printBtn)

        const printBtn = sublinks.find(({ page }) => {
            if (page === text.toLowerCase()) {
                return page
            }
        })

        const content = printBtn.links


        const links = content.map(function (item) {
            return ` <li><a href="${item.url}">${item.label} </a></li>`
        }).join("")
        subMenuContainer.innerHTML = links

    })
})




heroContainer.addEventListener("mouseover", function (e) {
    if (e.target.className != 'menu-conatiner') {
        subMenu.classList.remove("display")
    }
})

main.addEventListener("mouseover", function (e) {
    subMenu.classList.remove("display")
})


const printLinks = sublinks.map((item) => {
    // const { links, page } = item
    const linkList = item.links
    return `<ul class="sidebar-menu-list">
        <h3>${item.page}</h3>
        ${linkList.map(function (item) {
        return `<li>
                  <a class="sidebar-btn" href="${item.url}"> ${item.label}</a>

                </li>`
        // < i class="${item.icon}" ></i >
    }).join("")}
        </ul >`
}).join("")
sideBarLinks.innerHTML = printLinks


