const circleIn = document.getElementById('circle-in');
const circleOut = document.getElementById('circle-out');
const preloader = document.getElementById('preloader');

const loaded = () => {
  circleIn.classList.add("loaded");
  circleOut.classList.add("loaded");
}

const preloaderStart = () => {
  setTimeout(loaded, 1000);
  setTimeout(() => {
    preloader.classList.add('close');
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 1000);
  }, 2500);
}

document.addEventListener('DOMContentLoaded', preloaderStart(), false);