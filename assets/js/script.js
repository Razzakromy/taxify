// JS
// MENU
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Preloader
const loaderEl = document.getElementsByClassName("fullpage-loader")[0];
document.addEventListener("readystatechange", (event) => {
   // const readyState = "interactive";
   const readyState = "complete";

   if (document.readyState == readyState) {
      // when document ready add lass to fadeout loader
      loaderEl.classList.add("fullpage-loader--invisible");

      // when loader is invisible remove it from the DOM
      setTimeout(() => {
         loaderEl.parentNode.removeChild(loaderEl);
      }, 350);
   }
});


// jQuery
$(document).ready(function () {
   // Slick Carousel
   $('.slick').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      speed: 3000,
   });
});

