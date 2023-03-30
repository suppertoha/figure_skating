// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar]);

const progressBar = document.querySelector(".progress");
const mainSlider = document.querySelector('.main-slider')


if (mainSlider) {
  const swiperAnime = new Swiper(mainSlider, {
    loop: true,
    grabCursor: true,
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".main-slider__next.swiper-button-next",
      prevEl: ".main-slider__prev.swiper-button-prev",
    },
    pagination: {
      el: ".main-slider__pagination.swiper-pagination",
      clickable: true,
    },

      breakpoints: {
      767: {
        slidesPerView: 'auto',
      },

    },

  });


  progressBar.addEventListener("animationend", myEndFunction);

  // Retrigger Animation on Slide Change

  function myEndFunction() {
    swiperAnime.slideNext();
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Triggers Reflow
    progressBar.style.animation = null;
  }

  // Reset Progress Bar On Slide Change

  swiperAnime.on("slideChange", function () {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Triggers Reflow
    progressBar.style.animation = null;
    progressBar.style.animationPlayState = "paused"; // Optional
  });

  // Pause Carousel/Progress Bar On Hover

  document
    .querySelectorAll(".main-slider, .carousel-progress")
    .forEach((item) => {
      item.addEventListener("mouseenter", function () {
        progressBar.style.animationPlayState = "paused";
      });
    });

  document
    .querySelectorAll(".main-slider,.carousel-progress")
    .forEach((item) => {
      item.addEventListener("mouseleave", function () {
        progressBar.style.animationPlayState = "running";
      });
    });

}

//const swiper = new Swiper(".main-slider", {
//  slidesPerView: 1.1,
//  spaceBetween: 10,
//  centeredSlides: true,
//  loop: true,
//  autoplay: {
//    autoplay: { delay: 3000, },
//    disableOnInteraction: false,
//    },
//  navigation: {
//    nextEl: '.main-slider__next.swiper-button-next',
//    prevEl: '.main-slider__prev.swiper-button-prev',
//  },
//  pagination: {
//    el: '.main-slider__pagination.swiper-pagination',
//    //type: 'progressbar',
//    //clickable: true,
//    //dynamicBullets: true,
//    //dynamicMainBullets: 3,
//    //dynamicMainBullets:1,
//  },

//  breakpoints: {
//    767: {
//      slidesPerView: 'auto',
//    },

//  },

//});

//Autoplay

const swiperBottom = new Swiper(".main-slider_bottom", {
  slidesPerView: 1.1,

  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".main-slider__next_bottom.swiper-button-next",
    prevEl: ".main-slider__prev_bottom.swiper-button-prev",
  },

  breakpoints: {
    767: {
      slidesPerView: "auto",
    },
  },
});

const navCalendar = new Swiper(".nav-calendar", {
  slidesPerView: "auto",
  spaceBetween: 10,
  resizeObserver: false,
  //centeredSlides: true,
  //loop: true,
  navigation: {
    nextEl: ".nav-calendar__next.swiper-button-next",
    prevEl: ".nav-calendar__prev.swiper-button-prev",
  },
});
