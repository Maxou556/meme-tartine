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

(function () {
  var scroller = document.querySelector(".photos");
  var prev = document.querySelector(".photo-arrow.prev");
  var next = document.querySelector(".photo-arrow.next");
  if (!scroller || !prev || !next) return;

  function step() {
    var img = scroller.querySelector("img");
    if (!img) return Math.round(scroller.clientWidth * 0.8);
    var styles = window.getComputedStyle(scroller);
    var gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return img.getBoundingClientRect().width + gap;
  }

  function update() {
    var max = scroller.scrollWidth - scroller.clientWidth;
    prev.disabled = scroller.scrollLeft <= 2;
    next.disabled = scroller.scrollLeft >= max - 2;
  }

  prev.addEventListener("click", function () {
    scroller.scrollBy({ left: -step(), behavior: "smooth" });
  });
  next.addEventListener("click", function () {
    scroller.scrollBy({ left: step(), behavior: "smooth" });
  });
  scroller.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
