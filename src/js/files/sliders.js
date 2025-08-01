export default function sliders() {
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 1000,
      effect: "fade",
      navigation: {
        prevEl: ".intro .slider-btn._prev",
        nextEl: ".intro .slider-btn._next"
      },
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".intro__slider-pagination",
        clickable: true
      }
    })
  }

  const aboutSlider = document.querySelector(".s-about__slider");

  if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      speed: 1000,
      slidesPerView: "auto",
      spaceBetween: 24,
      navigation: {
        prevEl: ".s-about .slider-btn._prev",
        nextEl: ".s-about .slider-btn._next"
      },
      // autoplay: {
      //   delay: 3000
      // },
    })
  }
}