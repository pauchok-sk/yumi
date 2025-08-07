export default function anchors() {
  const burger = document.querySelector("#burger");
  const burgerOverlay = document.querySelector("#burger-overlay");

  const anchors = document.querySelectorAll("[data-anchor]");

  if (anchors.length) {
    anchors.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        anchors.forEach(a => a.classList.remove("_active"))

        link.classList.add("_active");

        let href = this.getAttribute("href").substring(1);

        const scrollTarget = document.getElementById(href);

        if (scrollTarget) {
          window.scrollBy({
            top: scrollTarget.getBoundingClientRect().top,
            behavior: "smooth",
          });

          handlerBurgerClose();
        }
      });

      function handlerBurgerClose() {
        burger.classList.remove("_open");
        burgerOverlay.classList.remove("_active");
        document.body.classList.remove("body-hidden");
      }
    });
  }
}
