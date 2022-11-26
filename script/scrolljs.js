if (typeof window !== "undefined") {
  var body = document.body;
  // console.log(document.links);
  alert("Use up and down arrow keys to scroll");

  function scrollbody() {
    scrollBy(0, window.innerHeight);
  }

  function scrollup() {
    scrollBy(0, -window.innerHeight);
  }

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
