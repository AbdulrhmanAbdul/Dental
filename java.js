// let icon = document.querySelector(".icon");
// let nav = document.querySelector("links-container");

// function switching(){
//     console.log(nav);
//     nav.classList.toggle("boom");
// }
// icon.addEventListener("click",switching);

// console.log(1+1);

// ################################################# responsive navigation bar ####################################
let icon = document.querySelector("#icon");
let navbar = document.querySelector("#responsive-nav");

function openNav() {
    navbar.style.top = "0";
}
function closeNav() {
    navbar.style.top = "-1000px";
}
// ################################################# responsive navigation bar ####################################



let swiper = new swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplayDelay: 1500,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


// let slider = document.querySelector(".slider");

// if (window.matchMedia("(max-width: 600px)").matches) {
//     slider.setAttribute("slides-per-view", "3")
//     slider.setAttribute("spaceBetween", "30")
// } else if (window.matchMedia("(max-width: 1000px)").matches) {
//     slider.setAttribute("slides-per-view", "5")
//     slider.setAttribute("spaceBetween", "50")
// } else {
//     slider.setAttribute("slides-per-view", "6")
//     slider.setAttribute("spaceBetween", "60")
// }
