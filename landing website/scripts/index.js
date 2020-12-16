//Menu 
const html = document.documentElement
const navBtn = document.querySelector(".nav-btn");
const navBg = document.querySelector(".nav-bg");
const navMenu = document.querySelector(".nav-menu");
const btnLink = document.querySelectorAll(".nav-menu-item");
const navBar = document.querySelectorAll(".nav-btn-bar");
const navCross = document.querySelectorAll(".nav-btn-cross");
const cross1 = document.querySelector(".nav-btn-bar4-cross")
const cross2 = document.querySelector(".nav-btn-bar5-cross")


navBtn.addEventListener("mouseover", () => {
    navBar.forEach(bar => {
        bar.classList.add('nav-btn-bar-hover')
    });
})

navBtn.addEventListener("mouseout", () => {
    navBar.forEach(bar => {
        bar.classList.remove('nav-btn-bar-hover')
    });
})

//click open menu
navBtn.addEventListener('click', function () {
    activateMenu()

})

//click link interaction
btnLink.forEach(btn => {
    btn.addEventListener('click', function () {
        activateMenu()
        btnName = btn.innerText;
        if (btnName == 'Home') {
            btnName = 'index'
        }
        setTimeout(function () { window.location.href = `../${btnName}.html`; }, 900);
    })
});



//click menu activation function
function activateMenu() {
    if (!navMenu.classList.contains('nav-menu-active')) {

        navBg.classList.remove('nav-background-inactive');
        navBg.classList.add('nav-background-active');
        navMenu.classList.add('nav-menu-active');
        navMenu.classList.remove('item-deactive');

        setTimeout(function () {
            html.classList.add('overflow')
        }, 500);

        navBar.forEach(bar => {
            bar.classList.add('display-none')
        });

        navCross.forEach(cross => {
            cross.classList.remove('display-none')
        });
    }

    else {

        navBg.classList.remove('nav-background-active');
        navBg.classList.add('nav-background-inactive');
        navMenu.classList.add('item-deactive');
        cross1.classList.add('nav-btn-bar4-cross-close')
        cross2.classList.add('nav-btn-bar5-cross-close')
        setTimeout(function () {
            navBg.classList.add('nav-background-inactive');
            navBg.classList.remove('nav-background-inactive');
            navCross.forEach(cross => {
                cross.classList.add('display-none')
            });
            cross1.classList.remove('nav-btn-bar4-cross-close')
            cross2.classList.remove('nav-btn-bar5-cross-close')
            navMenu.classList.remove('nav-menu-active');
            navMenu.classList.remove('item-deactive');
            navBar.forEach(bar => {
                bar.classList.remove('display-none')
            });
        }, 600);
        html.classList.remove('overflow')
    }
}

//projects
const imageScale = document.querySelectorAll(".home-page-projects-gallery-img");



imageScale.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.classList.remove("scaledown")
        image.classList.add("scale")
    })


    image.addEventListener("mouseout", () => {
        image.classList.remove("scale")
        image.classList.add("scaledown")

    })
});
