export default function order() {
  const buttons = document.querySelectorAll(".card-product__btn");

  if (buttons.length) {
    const orderName = document.querySelector("#order-name");
    const orderId = document.querySelector("#order-id");

    const orderNameInput = document.querySelector("#order-name-input");
    const orderIdInput = document.querySelector("#order-id-input");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".card-product").querySelector(".card-product__id").textContent;
        const title = btn.closest(".card-product").querySelector(".card-product__title").textContent;

        orderId.textContent = id;
        orderName.textContent = title;

        orderNameInput.value = title;
        orderIdInput.value = id;
      })
    })
  }
}