

// ---header scroll start---
const header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// ---header scroll end---

// ---header scroll start---
const footer = document.getElementById('footer');
window.addEventListener('scroll', function () {

    if (window.scrollY > 30) {
        footer.classList.add('scrolled');
    } else {
        footer.classList.remove('scrolled');
    }
});
// ---header scroll end---
//bars 
const bar = document.querySelector(".drop");
const navbar = document.querySelector(".h-a");
const navbarli = document.querySelectorAll("nav li");

bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    navbar.classList.toggle("active");
});

let btn = document.querySelector(".drop");
let icon = btn.querySelector(".fa-bars");
btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
};
window.addEventListener("scroll", function () {
    console.log("test");
    let TopScrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(TopScrolled);
    if (TopScrolled > 1) {
        document.querySelector(".h-a").classList.remove("active");
        icon.classList.replace("fa-times", "fa-bars");
    } else {
        document.getElementById("main-header").classList.add("fixedmenu");
        TopScrolled = 1;
    }
});

// ---home slider start---
$(".slick-slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true, Boolean,
    arrows: false, Boolean
});

// ---home slider end---

// ---image change start---
function changeImage(element, hoverImage) {
    element.querySelector('img').src = hoverImage;
}

// JavaScript function to restore the original image on mouseout
function restoreImage(element) {
    const defaultImage = element.getAttribute('data-default-image');
    element.querySelector('img').src = defaultImage;
}

// Set default image paths as data attributes
document.querySelectorAll('.h-sec3-img').forEach(function (element) {
    const defaultImage = element.querySelector('img').src;
    element.setAttribute('data-default-image', defaultImage);
});
// ---image change end---

// ---testimonal slider start----
$(document).ready(function () {
    $('.my-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// ---testimonal slider end----


