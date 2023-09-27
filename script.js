const body = document.querySelector("body");
const board = document.querySelector(".board");

let numberOfBox ;
const smallDivArray = [];
const bigDivArray = [];
let currentWidth = board.offsetWidth;
let currentHeight = board.offsetHeight;

function getLineHeight() {
  let currentLineHeight = Math.floor(currentWidth / numberOfBox);
  return currentLineHeight;
}

function SetNumberOfBox(boxes) {
  numberOfBox = boxes;
}

function emptyArray(Array) {
  while (Array.length > 0) {
    Array.pop();
  }
}

function setLine(numberOfBox) {
  emptyArray(bigDivArray);
  let currentLineHeight = getLineHeight();
  for (let i = 0; i < numberOfBox; i++) {
    let bigDiv = document.createElement("div");
    bigDiv.setAttribute("style", `height: ${currentLineHeight}px;`);
    bigDiv.classList.add("bigDiv");
    bigDivArray.push(bigDiv);
  }
  bigDivArray.forEach((bigDiv) => {
    board.appendChild(bigDiv);
  });
}

function setRow(numberOfBox) {
  emptyArray(smallDivArray);
  let currentLineHeight = getLineHeight();
  bigDivArray.forEach((bigDiv) => {
    for (let j = 0; j < numberOfBox; j++) {
      let div = document.createElement("div");
      div.setAttribute(
        "style",
        `width:${currentLineHeight}px;height: ${currentLineHeight}px;`
      );
      div.classList.add("smallDiv");
      bigDiv.appendChild(div);
      smallDivArray.push(div);
    }
  });
}

function eraseBoard() {
  board.innerHTML = "";
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.classList.add("hover");
}

function addPaintEffect() {
  smallDivArray.forEach((smallDiv) => {
    smallDiv.addEventListener("mouseover", changeColor);
  });
}

function ReWorkBoard(numberOfBox) {
  SetNumberOfBox(numberOfBox);
  setLine(numberOfBox);
  setRow(numberOfBox);
  addPaintEffect();
}
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

ReWorkBoard(4);
