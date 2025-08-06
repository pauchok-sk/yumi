export default function sliders() {
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 1000,
      effect: "fade",
      navigation: {
        prevEl: ".intro .slider-btn._prev",
        nextEl: ".intro .slider-btn._next",
      },
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".intro__slider-pagination",
        clickable: true,
      },
    });
  }

  const aboutSliders = document.querySelectorAll(".s-about__slider");

  if (aboutSliders.length) {
    aboutSliders.forEach(slider => {
      const swiper = new Swiper(slider, {
        speed: 1000,
        slidesPerView: "auto",
        spaceBetween: 24,
        navigation: {
          prevEl: ".s-about .slider-btn._prev",
          nextEl: ".s-about .slider-btn._next",
        },
        autoplay: {
          delay: 3000,
        },
      });
    })
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        prevEl: ".s-team .slider-btn._prev",
        nextEl: ".s-team .slider-btn._next",
      },
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".s-team .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }
}
