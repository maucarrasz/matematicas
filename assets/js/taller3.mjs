import { Investment } from "./math.mjs";

const resetButton = document.getElementById("btn-reset");
const calculateButton = document.getElementById("btn-calculate");
const inputAmount = document.getElementById("input-amount");
const inputInterest = document.getElementById("input-interest");
const inputTime = document.getElementById("input-time");
const inputTypeInterest = document.getElementById("type-interest");
const textResultado = document.getElementById("answer");

resetButton.addEventListener("click", resetValues);

function resetValues() {
  inputAmount.value = "";
  inputInterest.value = "";
  inputTime.value = "";
  inputTypeInterest.value = "simple";
  textResultado.innerHTML = "Final investment";
}

calculateButton.addEventListener("click", mostrarMontoInversion);

function mostrarMontoInversion() {
  let investment = new Investment(
    inputAmount.value,
    inputInterest.value,
    inputTime.value
  );
  if (
    investment.startAmount > 0 &&
    investment.interestPercentage > 0 &&
    investment.timeYears > 0
  ) {
    if (inputTypeInterest.value === "simple") {
      textResultado.innerHTML = investment.simpleInterest;
    } else if (inputTypeInterest.value === "compound") {
      textResultado.innerHTML = investment.compoundInterest;
    }
  } else {
    textResultado.innerHTML = `Missing data ❗❗`;
  }
}
