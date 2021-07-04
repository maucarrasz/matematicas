function investmentWithSimpleInterest(
  startAmount,
  interestPercentage,
  timeYears
) {
  let capital = Number(startAmount);
  let tiempo = Number(timeYears);
  let tasaDeInteres = Number(interestPercentage / 100);
  // Calculamos el interes simple
  let interesSimple = capital * tasaDeInteres * tiempo;
  let montoFinal = capital + interesSimple;
  return Number(montoFinal);
}
function investmentWithCompoundInterest(
  startAmount,
  interestPercentage,
  timeYears
) {
  let capital = Number(startAmount);
  let tiempo = Number(timeYears);
  let tasaDeInteres = Number(interestPercentage / 100);
  // Calculamos el monto final con interes compuesto
  let montoFinal = capital * (1 + tasaDeInteres) ** tiempo;
  return Number(montoFinal);
}

function reset() {
  const inputAmount = document.getElementById("input-amount");
  const inputInterest = document.getElementById("input-interest");
  const inputTime = document.getElementById("input-time");
  const inputTypeInterest = document.getElementById("type-interest");
  const textResultado = document.getElementById("answer");
  let montoValue = inputAmount.value;
  let interesValue = inputInterest.value;
  let tiempoValue = inputTime.value;
  let tipoInteresValue = inputTypeInterest.value;

  montoValue = "";
  interesValue = "";
  tiempoValue = "";
  tipoInteresValue = "simple";
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
      textResultado.innerHTML = `Your investment with initial capital of $${montoValue} and simple annual interest of ${interesValue}% over ${tiempoValue} years will be <span>$${resultado}</span>`;
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
