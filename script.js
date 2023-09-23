const body = document.querySelector("body");
const board = document.querySelector(".board");
console.log(board);
const bigDivArray = [];
const smallDivArray = [];
numberOfBox = 15;
for (let i = 0; i < numberOfBox; i++) {
  let bigDiv = document.createElement("div");
  bigDiv.classList.add("bigDiv");
  bigDivArray.push(bigDiv);
}
bigDivArray.forEach((bigDiv) => {
  board.appendChild(bigDiv);
});
bigDivArray.forEach((bigDiv) => {
  for (let j = 0; j < numberOfBox; j++) {
    let div = document.createElement("div");
    div.classList.add("smallDiv");
    bigDiv.appendChild(div);
    smallDivArray.push(div);
  }
});
function paintSmallDiv() {
  e.target.classList.add("hover");
}

smallDivArray.forEach((smallDiv) => {
  smallDiv.addEventListener("mouseover", (event) => {
    smallDiv.classList.add("hover");
  });
});
