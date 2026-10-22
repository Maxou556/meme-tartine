(function () {
  var buttons = document.querySelectorAll(".filters button");
  var sections = document.querySelectorAll(".menu-section");
  if (!buttons.length) return;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      buttons.forEach(function (other) {
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
      sections.forEach(function (section) {
        var show = filter === "all" || section.getAttribute("data-cat") === filter;
        section.hidden = !show;
      });
    });
  });
})();
