const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 20) {
    navbar.style.backgroundColor = "blue";
  }
});
