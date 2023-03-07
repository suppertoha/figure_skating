const followCursor = () => {
  // объявляем функцию followCursor
  const el = document.querySelector(".follow-cursor"); // ищем элемент, который будет следовать за курсором

  //if (el.clientX < 5 || el.clientY < 5 || el.clientY > (window.innerHeight - 5) || el.clientX > (window.innerWidth - 5)) {
  //  el.style.opacity = 0;
  //} else {
  //  el.style.opacity = 1;
  //  el.style.transform = `translate(${el.clientX - 10}px, ${el.clientY - 10}px)`;
  //}

  window.addEventListener("mousemove", (e) => {
    // при движении курсора
    const target = e.target; // определяем, где находится курсор
    if (!target) return;

    if (
      target.closest(
        ".content-text__inner, .sidebar-cart__items,.cards-main__item, .cards-main__show-more, .main__slider_inside, .main-menu__inner,.commission__inner,.payment__inner, .main__slider,.about,.cart-about__item, h1,.payment__consultation, .important__header, button,.list__item, .header-politics, a, button, picture, h1, h2, h3, p, ul, li, input,.btn-up,tr,th, span,.testing__inner,.apply-testing__inner,.skate-insurance__inner,.calendar__show,.calendar__body,.testing__inner,.contact__map,.contact__item,.contact__description,.searching-results__content,.description-search,.magazine__block,.magazine__content-text,.school-search__map,.school-search__container,.main-error__text "
      )
    ) {
      // если курсор наведён на ссылку
      el.classList.remove("follow-cursor"); // элементу добавляем активный класс
    } else {
      // иначе
      el.classList.add("follow-cursor"); // удаляем активный класс
    }

    el.style.left = e.clientX + "px"; // задаём элементу позиционирование слева
    el.style.top = e.clientY + "px"; // задаём элементу позиционирование сверху
  });
};

followCursor(); // вызываем функцию followCursor


