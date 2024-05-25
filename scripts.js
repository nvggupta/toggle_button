const toggle = document.getElementById("toggle");
const heading = document.getElementById("heading");
const circle = document.getElementById("circle");
const container = document.getElementById("container");
let isLightMode = true;

toggle.addEventListener('click', () => {
  changeBackground();
});

function changeBackground() {
  if (isLightMode) {
    circle.classList.remove("left");
    circle.classList.add("right");
    container.style.backgroundColor = "white";
    heading.style.color = "black";
  } else {
    circle.classList.remove("right");
    circle.classList.add("left");
    container.style.backgroundColor = "black";
    heading.style.color = "white";
  }
  isLightMode = !isLightMode; // Toggle the mode
}