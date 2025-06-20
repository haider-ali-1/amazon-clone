const swiper = new Swiper(".swiper.hero", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: false,
  speed: 800,
  navigation: {
    nextEl: ".swiper.hero .swiper-button-next",
    prevEl: ".swiper.hero .swiper-button-prev",
  },
});

const popularProductsSwiper = new Swiper(".swiper.popular-products-swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 3,
  spaceBetween: 40,
  speed: 500,
  scrollbar: {
    el: ".swiper.popular-products-swiper .swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper.popular-products-swiper .swiper-button-next",
    prevEl: ".swiper.popular-products-swiper .swiper-button-prev",
  },
});

// Navbar Display

const hamburger = document.querySelector(".hamburger-wrapper");
const backdropOverlay = document.querySelector(".nav-overlay");
const navMobile = document.querySelector(".nav-mobile");
const closeBtn = document.querySelector(".close-nav-btn");

console.log(hamburger);
console.log(backdropOverlay);
console.log(navMobile);

function navToggler() {
  backdropOverlay.classList.toggle("active");
  navMobile.classList.toggle("active");
  closeBtn.classList.toggle("active");
}

hamburger.addEventListener("click", navToggler);
closeBtn.addEventListener("click", navToggler);
