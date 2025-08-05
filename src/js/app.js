import "../scss/style.scss";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import loader from "./files/loader.js";
import map from "./files/map.js";
import order from "./files/order.js";
import servicesToggle from "./files/servicesToggle.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
loader();
burger();
servicesToggle();
sliders();
map();
headerScroll();
order();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
