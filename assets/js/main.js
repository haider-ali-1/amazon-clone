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
