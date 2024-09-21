let BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let dropdown = document.querySelectorAll(".select-conaitner  select");
let amount = document.querySelector(".amount input");
let finalAmt = document.querySelector("#result");
let exchangeBtn = document.querySelector("button");
let fromCur = document.querySelector(".from select");
let toCur = document.querySelector(".to select");

for (let select of dropdown) {
  for (curCode in countryList) {
    let options = document.createElement("option");
    options.innerText = curCode;
    options.value = curCode;
    if (select.name === "from" && curCode === "USD") {
      options.selected = "selected";
    } else if (select.name === "to" && curCode === "INR") {
      options.selected = "selected";
    }
    select.append(options);
  }
  select.addEventListener("change", (e) => {
    falgImg(e.target);
  });
}

const falgImg = (element) => {
  let curCode = element.value;
  let counrtyCode = countryList[curCode];
  let newSrc = `https://flagsapi.com/${counrtyCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

exchangeBtn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  updateResult();

  finalAmt.classList.add("msg");

  document.addEventListener("load", () => {
    updateResult();
  });

  if (amount.value === "" || amount.value < 1) {
    amount.value = 1;
  }

  const URL = `${BASE_URL}/${fromCur.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCur.value.toLowerCase()][toCur.value.toLowerCase()];

  let finalAmount = amount.value * rate;
  finalAmt.innerText = `${amount.value} ${fromCur.value} = ${finalAmount} ${toCur.value}`;
});

const updateResult = () => {};
