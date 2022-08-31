var swiper1 = new Swiper(".pl-swiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  centeredSlides: false,
  watchSlidesProgress: false,
  loop: true,
  autoplay: {
    delay: 700,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 10,
    },
  },
});

var swiper2 = new Swiper(".share-swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper3 = new Swiper(".course-swiper", {
  spaceBetween: 16,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
  language: 'zh-CN',
});