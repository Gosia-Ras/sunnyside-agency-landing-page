document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    let menu = document.getElementById("myLinks");
    let heroContent = document.getElementById("heroContent");

    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
      heroContent.classList.add("hidden");
    } else {
      heroContent.classList.remove("hidden");
    }
  }

  let menuIcon = document.getElementById("menuIcon");
  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  }
});
