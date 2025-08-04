export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop >= header.clientHeight) {
        header.classList.add("_hide");
      } else {
        header.classList.remove("_hide");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }
}