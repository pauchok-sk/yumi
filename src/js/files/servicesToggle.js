export default function servicesToggle() {
  const servicesBlock = document.querySelector("#services");

  if (servicesBlock) {
    const header = document.querySelector(".header");
    const overlay = document.querySelector("#services-overlay");
    const btn = document.querySelector("#services-btn");

    servicesBlock.style.top = `${header.clientHeight}px`;

    btn.addEventListener("mouseover", () => {
      servicesBlock.classList.add("_open");
      overlay.classList.add("_active");
    });

    overlay.addEventListener("mouseover", () => {
      servicesBlock.classList.remove("_open");
      overlay.classList.remove("_active");
    });
  }
}
