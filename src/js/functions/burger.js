import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  //const searchMobile = document.querySelector(".search-mobile ");

  burger?.addEventListener("click", (e) => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      searchMobile.classList.add("active");

      disableScroll();
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      searchMobile.classList.remove("active");

      enableScroll();
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      enableScroll();
    });
  });
})();

const buttonMobile = document.querySelector(".button-mobile");
if (buttonMobile) {
  const buttonEl=document.querySelector('.search-mobile ')
  buttonMobile.addEventListener("click", () => {
    buttonEl.classList.toggle("active");
  });
}
