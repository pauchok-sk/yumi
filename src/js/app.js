import "../scss/style.scss";
import anchors from "./files/anchors.js";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import loader from "./files/loader.js";
import map from "./files/map.js";
import more from "./files/more.js";
import order from "./files/order.js";
import servicesToggle from "./files/servicesToggle.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
loader();
burger();
servicesToggle();
sliders();
map();
headerScroll();
order();
inputmask();
anchors();
tabs();
more();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{src: "#modal-signup", type: "inline"}])
