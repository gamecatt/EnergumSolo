const btn = document.getElementById("action-mobile-menu");
const mobileMenu = document.getElementById("mobile");

const mobileActive = () => {
  if (btn.className.includes("active") && !mobileMenu.className.includes("hide")) {
    btn.classList.remove("active");
    mobileMenu.classList.remove("show");
  }
  else {
    btn.classList.add("active");
    mobileMenu.classList.add("show");
  }
}