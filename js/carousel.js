const swiper = new Swiper('.card-wrapper', {
  loop: true,

  // centeredSlides: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination : {
    el : '.swiper-pagination',
    clickable : true,
    dynamicBullets : true,
  },

  navigation : {
    nextEl : '.swiper-button-next',
    prevEl : '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    }, 
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  }
})