const header = document.getElementById('navigation-bar');
window.onscroll = function () { headerScrollFunction() };

function headerScrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}