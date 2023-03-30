const jsMap = document.querySelectorAll(".js-map");
const buttonClose = document.querySelector(".mobile-search__arrow");

if (jsMap.length) {
  const nameMap = document.querySelector(".mobile-search__description");
  const wrapMenu = document.querySelector(".school-search__wrap");
  const mapSearch = document.querySelector(".school-search__map");
  jsMap.forEach((el) => {
    el.addEventListener("click", () => {
      wrapMenu.classList.add("black-active");
      mapSearch.classList.add("active");
      nameMap.classList.add("active-black");
    });
  });

  buttonClose.addEventListener("click", () => {
    wrapMenu.classList.remove("black-active");
    mapSearch.classList.remove("active");
    nameMap.classList.remove("active-black");
  });
}

const jsList = document.querySelectorAll(".js-list");

if (jsList.length) {
  const nameMapWhite = document.querySelector(".mobile-search__description");
  const wrapMenuWhite = document.querySelector(".school-search__wrap");
  const containerJs = document.querySelector(".js-container");
  jsList.forEach((el) => {
    el.addEventListener("click", () => {
      wrapMenuWhite.classList.add("white-active");
      nameMapWhite.classList.add("active-white");
      containerJs.classList.add("active");

    });
  });

  buttonClose.addEventListener("click", () => {
    wrapMenuWhite.classList.remove("white-active");
    nameMapWhite.classList.remove("active-white");
    containerJs.classList.remove("active");

  });
}
