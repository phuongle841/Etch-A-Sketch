const body = document.querySelector("body");
const board = document.querySelector(".board");
const eraseButton = document.querySelector("#eraseButton");
const Input = document.querySelector("#input"); // user input
const rainbowButton = document.querySelector("#randomButton");
const specialPaintButton = document.querySelector(`#specialPaint`);
const displayNumberOfBox = document.querySelector(`#displayNumberOfBox`);

let numberOfBox;
const smallDivArray = [];
const bigDivArray = [];
let rainbowState = false;
let currentWidth = board.offsetWidth;
let currentHeight = board.offsetHeight;

function getLineHeight() {
  let currentLineHeight = Math.floor(currentWidth / numberOfBox);
  return currentLineHeight;
}

function setNumberOfBox(boxes) {
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

function setDisplayNumberOfBox() {
  displayNumberOfBox.textContent = `number of boxes: ${numberOfBox}`;
}

function eraseBoard() {
  board.innerHTML = "";
}

function paintColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = `#000`;
}

function paintRandom(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = `${getRandomColor()}`;
}

function specifyPaint(e) {
  console.log(e);
  // e.style.backgroundColor = `#000`;
}

function addPaintEffect() {
  smallDivArray.forEach((smallDiv) => {
    smallDiv.addEventListener("mouseover", paintColor);
  });
}
function addRandomColor() {
  smallDivArray.forEach((smallDiv) => {
    smallDiv.addEventListener("mouseover", paintRandom);
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function ReWorkBoard(numberOfBox) {
  eraseBoard();
  setNumberOfBox(numberOfBox);
  setDisplayNumberOfBox();
  setLine(numberOfBox);
  setRow(numberOfBox);
  if (rainbowState) {
    addRandomColor();
  } else {
    addPaintEffect();
  }
}

function whitenBoard() {
  smallDivArray.forEach((smallDiv) => {
    smallDiv.style.backgroundColor = "white";
  });
}
Input.addEventListener("change", () => {
  let boxes = Input.value;
  Input.value = "";
  Input.focus();
  if (boxes > 64 || boxes <= 2) {
    // this will never happen since input box only input number
  } else {
    ReWorkBoard(boxes);
  }
});

function changeRainbowState() {
  if (rainbowState == true) {
    rainbowState = false;
    rainbowButton.classList.remove("hover");
  } else {
    rainbowState = true;
    rainbowButton.classList.add("hover");
  }
  ReWorkBoard(numberOfBox);
}

function specialDraw() {
  for (let i = 0; i < smallDivArray.length; i++) {
    if ((i + 1) % 10 == 0 || (i + 1) % 11 == 0) {
      // chose small box
      smallDivArray[i].style.backgroundColor = `black`;
    }
  }
}
function addNumber() {
  let i = 1;
  smallDivArray.forEach((smallDiv) => {
    // smallDiv.textContent = `${i}`;
    i++;
  });
}
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

eraseButton.addEventListener("click", whitenBoard);
rainbowButton.addEventListener("click", changeRainbowState);
specialPaintButton.addEventListener("click", specialDraw);
specialPaintButton.addEventListener("click", addNumber);

ReWorkBoard(20);
