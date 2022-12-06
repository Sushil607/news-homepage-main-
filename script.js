const menuIcon = document.getElementById("menuIcon");
const closeMenuIcon = document.getElementById("closeMenuIcon");
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

menuIcon.addEventListener("click", () => {
  mobileMenu.style.cssText = "display:block";
  document.body.style.cssText = "background-color:#ccc;overflow:hidden";
});

closeMenuIcon.addEventListener("click", () => {
  mobileMenu.style.cssText = "display:none";
  document.body.style.cssText = "background-color:white";
});
