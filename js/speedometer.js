const mySvg = document.getElementById('speedometer').getBoundingClientRect();
const offsetToTriggerAnimation = mySvg.y + mySvg.height;

const scrollAnimTriggerCheck = (evt) => {
  let viewBottom = window.scrollY + window.innerHeight;
  if (viewBottom > offsetToTriggerAnimation) {

    const anim = document.getElementsByClassName("progress");
    for (let i = 0; i < anim.length; i++) {
      anim.item(i).classList.add("done");
    }

    document.removeEventListener("scroll", scrollAnimTriggerCheck);
  }
}

document.addEventListener("scroll", scrollAnimTriggerCheck);