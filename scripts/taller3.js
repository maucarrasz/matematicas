const resetButton = document.getElementById("btn-reset");
resetButton.addEventListener("click", reset);

function reset() {
  const inputAmount = document.getElementById("input-amount");
  const inputInterest = document.getElementById("input-interest");
  const inputTime = document.getElementById("input-time");
  const inputTypeInterest = document.getElementById("type-interest");
  const textResultado = document.getElementById("answer");

  inputAmount.value = "";
  inputInterest.value = "";
  inputTime.value = "";
  inputTypeInterest.value = "simple";
  textResultado.innerHTML = "Final investment";
}

// Logica :D
function mostrarMontoInversion() {
  const inputAmount = document.getElementById("input-amount");
  const inputInterest = document.getElementById("input-interest");
  const inputTime = document.getElementById("input-time");
  const inputTypeInterest = document.getElementById("type-interest");
  const textResultado = document.getElementById("answer");
  let montoValue = inputAmount.value;
  let interesValue = inputInterest.value;
  let tiempoValue = inputTime.value;
  let tipoInteresValue = inputTypeInterest.value;
  if (montoValue !== "" && interesValue !== "" && tiempoValue !== "") {
    let resultado = 0;
    if (tipoInteresValue === "simple") {
      resultado = investmentWithSimpleInterest(
        montoValue,
        interesValue,
        tiempoValue
      );
      resultado = redondeoAlCentesimo(resultado);
      textResultado.innerHTML = `Your investment with initial capital of $${montoValue} and simple annual interest of ${interesValue}% over ${tiempoValue} years will be <span>$${resultado}</span>.`;
    }
    if (tipoInteresValue === "compound") {
      resultado = investmentWithCompoundInterest(
        montoValue,
        interesValue,
        tiempoValue
      );
      resultado = redondeoAlCentesimo(resultado);
      textResultado.innerHTML = `Your investment with initial capital of $${montoValue} and compound annual interest of ${interesValue}% over ${tiempoValue} years will be <span>$${resultado}</span>`;
    }
  } else {
    textResultado.innerHTML = `Missing data ❗❗`;
  }
}
