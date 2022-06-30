const popUp = document.getElementById("pop-up");
const popUpContainer = document.getElementById("popUpContainer");
const onActive = () => {
  popUpContainer.classList.remove("hide");
}
const onClose = () => {
  popUpContainer.classList.add("hide");
}