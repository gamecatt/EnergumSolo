const slider = document.getElementById("slider");
const items = document.getElementsByClassName("media-item");
const indicator = document.getElementById("slider-indicator").firstElementChild;
const itemsLength = items.length;

let currentItem = 0;
let step = 400;

function sliderStep(isNext) {
    screen.width < 601 ? step = 308 : step = 400;
    if (isNext) {
        currentItem < itemsLength - 1 ? currentItem++ : currentItem = 0;
        move = step * currentItem;
        slider.setAttribute("style", "transform: translateX(-" + move + "px)");
        currentItem < itemsLength / 2 ? indicator.setAttribute("style", "margin-left: 0px") : indicator.setAttribute("style", "margin-left: 25px");
    }
    else {
        currentItem > 0 ? currentItem-- : currentItem = itemsLength - 1;
        move = step * currentItem;
        slider.setAttribute("style", "transform: translateX(-" + move + "px)");
        currentItem < itemsLength / 2 ? indicator.setAttribute("style", "margin-left: 0px") : indicator.setAttribute("style", "margin-left: 25px");
    }
}