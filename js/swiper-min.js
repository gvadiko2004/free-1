const swiper = new Swiper(".swiper-clients", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  slidesPerView: 'auto', 
  centeredSlides: true, 

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
