if (typeof window !== "undefined") {
  var body = document.body;
  function scrollbody() {
    scrollBy(0, window.innerHeight);
  }

  function scrollup() {
    scrollBy(0, -window.innerHeight);
  }

  window.addEventListener(
    "scroll",
    function () {
      var lastScrollTop = 0;
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        //downside
      } else {
        // upscroll code
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      console.log("45 " + lastScrollTop);
    },
    false
  );

  body.addEventListener("keydown", function (event) {
    if (
      event.code === "ArrowDown" ||
      event.code === "Space" ||
      event.code === "PageDown"
    ) {
      event.preventDefault();
      scrollbody();
    }
    if (event.code === "ArrowUp" || event.code === "PageUp") {
      event.preventDefault();
      scrollup();
    }
  });
}
