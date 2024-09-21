let output = document.querySelector("#result");
let rstBtn = document.querySelector("#reset");
let dltBtn = document.querySelector("#delete");

const charAdd = (character) => {
  output.value += character;
};

function charDlt() {
  let dlt = output.value;
  output.value = dlt.slice(0, -1);
}

const resetbtn = () => {
  rstBtn.addEventListener("click", () => {
    output.value = "";
  });
};
resetbtn();

function calculate() {
  try {
    let result = eval(output.value);
    output.value = result;
  } catch (error) {
    alert("Invalid calculation");
  }
}
