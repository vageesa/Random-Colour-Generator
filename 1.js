let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  let body = document.querySelector("body");
  body.style.backgroundColor = randomColor;

  console.log("Page color updated to:", randomColor);
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
