if (document.querySelectorAll(".accordion-start-js").length > 0) {
  document.querySelectorAll(".accordion-start-js").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("open");
      let content = el.nextElementSibling;
      if (content.classList.contains("open")) {
        console.log("test");
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => (el.style.maxHeight = null));
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => content.classList.remove("open"));
      } else {
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => (el.style.maxHeight = null));
        //content.style.maxHeight = content.scrollHeight + "px";
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => content.classList.add("open"));
      }
    });
  });
}
