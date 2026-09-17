const burgerBtn = document.getElementById("burger-btn");
const headerNav = document.getElementById("header-nav");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  headerNav.classList.toggle("active");
});
