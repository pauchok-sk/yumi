export default function loader() {
  const loader = document.querySelector(".loader");

  if (loader) {
    window.addEventListener("load", () => {
      const cloudT = loader.querySelector(".loader__cloud-t");
      const cloudBl = loader.querySelector(".loader__cloud-bl");
      const cloudBr = loader.querySelector(".loader__cloud-br");
      const logo = loader.querySelector(".loader__logo")

      setTimeout(() => {
        cloudT.style.opacity = 0;
        cloudT.style.top = "-100%";

        cloudBl.style.opacity = 0;
        cloudBl.style.left = "-100%";

        cloudBr.style.opacity = 0;
        cloudBr.style.right = "-100%";

        logo.style.opacity = 0;

        setTimeout(() => {
          loader.style.opacity = 0;
          loader.style.visibility = "hidden";

          setTimeout(() => {
            loader.remove();
          }, 500);
        }, 2100);
      }, 300);
    });
  }
}
