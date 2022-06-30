const TL = gsap.timeline({ paused: true });
const spark1 = document.getElementsByClassName("spark");

// Windows light animation
TL.from(".house0-0", { duration: 0.7, opacity: 0 });
TL.from(".house0-1, .house0-2", { duration: 0.7, opacity: 0, stagger: -0.5 });
TL.from(".house1-0, .house1-1, #cityback-0", { duration: 0.7, opacity: 0, stagger: 0.5 });

TL.from(".house2-0, .house2-1, .house2-2, .house2-3", { duration: 0.7, opacity: 0, stagger: 0.3 });
TL.from(".house3-0, .house3-1", { duration: 0.5, opacity: 0 });
TL.to(".to-filter-dark", { duration: 0.2, opacity: 0 });

TL.from(".house4-0, .house4-1, .house4-2, #cityback-1", { duration: 0.7, opacity: 0 });
TL.from(".house5-0", { duration: 0.7, opacity: 0 });

TL.from(".house6-0, .house6-1", { duration: 0.7, opacity: 0 });

TL.from(".house7-0", { duration: 0.7, opacity: 0 });
TL.from(".house8-0, .house8-1, #cityback-2", { duration: 0.7, opacity: 0 });
TL.from("#city-ground, #flash-0, #flash-1, #flash-2, #flash-3, #flash-4, #flash-5, #flash-6, #flash-7", { duration: 0.5, delay: 8.9, opacity: 0 });

//background light on 
// TL.from("#city-backlight", {duration: 1, delay: 0.5 , opacity: 0});

// FlashLight animation

const buttonPlayAnimation = document.getElementById("buttonPlayAnimation");
let click = 0;
buttonPlayAnimation.addEventListener("click", () => {
  click++
  console.log(`Button presentation clicked ${click} times a row!`);
});

window.addEventListener('load', (event) => {
  setTimeout(() => {
    spark1[0].classList.add("moved");
    spark1[1].classList.add("moved");
    setTimeout(() => {
      spark1[2].classList.add("moved");
      setTimeout(() => {
        TL.play();
      }, 1300);
    }, 2000);
    setTimeout(() => {
      document.getElementById("header").classList.add("bg-active");
      document.getElementById("moon").classList.add("active");
    }, 21700);
  }, 1500);
});