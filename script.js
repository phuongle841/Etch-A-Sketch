const body = document.querySelector("body");

const bigDivArray = [];
for (let i = 0; i < 16; i++) {
  let bigDiv = document.createElement("div");
  bigDiv.classList.add("bigDiv");
  bigDivArray.push(bigDiv);
}
bigDivArray.forEach((bigDiv) => {
  body.appendChild(bigDiv);
});
bigDivArray.forEach((bigDiv) => {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.classList.add("smallDiv");
    div.textContent = (j+1)%10;
    bigDiv.appendChild(div);
  }
});
