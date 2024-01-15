const buttons = document.querySelectorAll("button"),
  colum = document.querySelectorAll(".colum");

buttons.forEach((e, id) => {
  e.addEventListener("click", (event) => {
    colors(event, id);
  });
});

function colors(event, id) {
  let hexCode = "#" + Math.floor(Math.random() * 16777216).toString(16);
  colum[id].style.background = hexCode;
}
