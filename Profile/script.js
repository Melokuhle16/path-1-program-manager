
const button = document.getElementById("colorBtn");

const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "turquoise",
  "yellow"
];

button.addEventListener("click", function () {

  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];

});