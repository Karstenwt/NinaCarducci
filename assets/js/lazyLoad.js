if (window.innerWidth <= 1000) {
  document.querySelectorAll("img:not(.no-lazy)").forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
}
