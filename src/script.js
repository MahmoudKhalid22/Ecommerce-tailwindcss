const menu = document.querySelector(".mobile");
const icon = document.querySelector(".mobileMenuIcon");

icon.addEventListener("click", () => {
  menu.classList.toggle("mobile");
});
