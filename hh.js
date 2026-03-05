function toggleMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu");

  burger.classList.toggle("active");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
