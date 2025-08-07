(() => {
    "use strict";
    function anchors_anchors() {
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        const anchors = document.querySelectorAll("[data-anchor]");
        if (anchors.length) anchors.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                anchors.forEach(a => a.classList.remove("_active"));
                link.classList.add("_active");
                let href = this.getAttribute("href").substring(1);
                const scrollTarget = document.getElementById(href);
                if (scrollTarget) {
                    window.scrollBy({
                        top: scrollTarget.getBoundingClientRect().top,
                        behavior: "smooth"
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
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerClose = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            burger.addEventListener("click", e => e.stopPropagation());
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerOpen();
            });
            burgerClose.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerClose();
            });
            function handlerBurgerClose() {
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
                document.body.classList.remove("body-hidden");
            }
            function handlerBurgerOpen() {
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                document.body.classList.add("body-hidden");
            }
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        if (header) {
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop && scrollTop >= header.clientHeight) header.classList.add("_hide"); else header.classList.remove("_hide");
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function loader() {
        const loader = document.querySelector(".loader");
        if (loader) window.addEventListener("load", () => {
            const cloudT = loader.querySelector(".loader__cloud-t");
            const cloudBl = loader.querySelector(".loader__cloud-bl");
            const cloudBr = loader.querySelector(".loader__cloud-br");
            const logo = loader.querySelector(".loader__logo");
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
    function map() {
        const contactsMap = document.querySelector("#map");
        if (contactsMap) {
            function init() {
                const center = JSON.parse(contactsMap.dataset.center);
                const zoom = Number(contactsMap.dataset.zoom);
                const map = new ymaps.Map("map", {
                    center,
                    zoom
                });
                const placemark = new ymaps.Placemark(center, {}, {});
                map.controls.remove("geolocationControl");
                map.controls.remove("searchControl");
                map.controls.remove("trafficControl");
                map.controls.remove("typeSelector");
                map.controls.remove("fullscreenControl");
                map.controls.remove("zoomControl");
                map.controls.remove("rulerControl");
                map.behaviors.disable([ "scrollZoom" ]);
                map.geoObjects.add(placemark);
            }
            ymaps.ready(init);
        }
    }
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) containers.forEach(container => {
            const btn = container.querySelector("[data-more-btn]");
            const count = +container.dataset.countShow;
            const lengthItems = container.querySelectorAll("[data-more-item]").length;
            if (count >= lengthItems && btn) btn.remove();
            btn.addEventListener("click", () => {
                const items = container.querySelectorAll("[data-more-item]");
                const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                hideItems.splice(0, count).forEach(item => {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = "translateY(0)";
                    });
                });
                if (hideItems.length <= 0) btn.remove();
            });
        });
    }
    function order() {
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
                });
            });
        }
    }
    function servicesToggle() {
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
    function sliders() {
        const introSlider = document.querySelector(".intro__slider");
        if (introSlider) {
            new Swiper(introSlider, {
                speed: 1e3,
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
            });
        }
        const aboutSliders = document.querySelectorAll(".s-about__slider");
        if (aboutSliders.length) aboutSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 1e3,
                slidesPerView: "auto",
                spaceBetween: 24,
                navigation: {
                    prevEl: ".s-about .slider-btn._prev",
                    nextEl: ".s-about .slider-btn._next"
                },
                autoplay: {
                    delay: 3e3
                }
            });
        });
        const teamSlider = document.querySelector(".s-team__slider");
        if (teamSlider) {
            new Swiper(teamSlider, {
                speed: 1e3,
                slidesPerView: 1,
                spaceBetween: 24,
                navigation: {
                    prevEl: ".s-team .slider-btn._prev",
                    nextEl: ".s-team .slider-btn._next"
                },
                autoplay: {
                    delay: 3500
                },
                pagination: {
                    el: ".s-team .slider-pagination",
                    clickable: true
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    }
                }
            });
        }
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelectorAll("[data-tab-btn]");
                const allTabs = container.querySelectorAll("[data-tab]");
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_active");
                    t.style.opacity = 0;
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.style.opacity = 1;
                }, 10);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
    }
    spoller();
    loader();
    burger();
    servicesToggle();
    sliders();
    map();
    headerScroll();
    order();
    inputmask();
    anchors_anchors();
    tabs();
    more();
    Fancybox.bind("[data-fancybox]", {
        closeButton: false
    });
})();