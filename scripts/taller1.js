// Cuadrado
function calcularPerimetroCuadrado(l) {
  return l * 4;
}
function calcularAreaCuadrado(l) {
  return l ** 2;
}
// Triangulo
function calcularPerimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function calcularAreaTriangulo(b, h) {
  return (b * h) / 2;
}
// Circulo
function calcularPerimetroCirculo(r) {
  return 2 * r * Math.PI;
}
function calcularAreaCirculo(r) {
  return Math.PI * r ** 2;
}

// Area y Perímetro del Cuadrado -----------------------------

const inputLadoCuadrado = document.getElementById("lado-cuadrado");
const btnCuadradoPerimetro = document.getElementById(
  "calcular-perimetro-cuadrado"
);
const btnCuadradoArea = document.getElementById("calcular-area-cuadrado");

btnCuadradoPerimetro.addEventListener("click", mostrarPerimetroCuadrado);
btnCuadradoArea.addEventListener("click", mostrarAreaCuadrado);

function mostrarPerimetroCuadrado() {
  let perimetroCuadrado = calcularPerimetroCuadrado(inputLadoCuadrado.value);
  perimetroCuadrado =
    Math.round((perimetroCuadrado + Number.EPSILON) * 100) / 100;
  console.log(perimetroCuadrado);
  document.getElementById(
    "respuesta-cuadrado"
  ).innerHTML = `${perimetroCuadrado}cm`;
}
function mostrarAreaCuadrado() {
  let areaCuadrado = calcularAreaCuadrado(inputLadoCuadrado.value);
  areaCuadrado = Math.round((areaCuadrado + Number.EPSILON) * 100) / 100;
  document.getElementById(
    "respuesta-cuadrado"
  ).innerHTML = `${areaCuadrado}cm <sup>2</sup>`;
}

// Area y Perímetro del Triángulo -----------------------------

const inputLadoUnoTriangulo = document.getElementById("lado1-triangulo");
const inputLadoDosTriangulo = document.getElementById("lado2-triangulo");
const inputBaseTriangulo = document.getElementById("base-triangulo");
const inputAlturaTriangulo = document.getElementById("altura-triangulo");
const btnTrianguloPerimetro = document.getElementById(
  "calcular-perimetro-triangulo"
);
const btnTrianguloArea = document.getElementById("calcular-area-triangulo");

btnTrianguloPerimetro.addEventListener("click", mostrarPerimetroTriangulo);
btnTrianguloArea.addEventListener("click", mostrarAreaTriangulo);

function mostrarPerimetroTriangulo() {
  let perimetroTriangulo = calcularPerimetroTriangulo(
    Number(inputLadoUnoTriangulo.value),
    Number(inputLadoDosTriangulo.value),
    Number(inputBaseTriangulo.value)
  );
  perimetroTriangulo =
    Math.round((perimetroTriangulo + Number.EPSILON) * 100) / 100;

  console.log(perimetroTriangulo);
  document.getElementById(
    "respuesta-triangulo"
  ).innerHTML = `${perimetroTriangulo}cm`;
}
function mostrarAreaTriangulo() {
  let areaTriangulo = calcularAreaTriangulo(
    inputBaseTriangulo.value,
    inputAlturaTriangulo.value
  );
  areaTriangulo = Math.round((areaTriangulo + Number.EPSILON) * 100) / 100;

  document.getElementById(
    "respuesta-triangulo"
  ).innerHTML = `${areaTriangulo}cm<sup>2</sup>`;
}

// Area y Perímetro del Circulo -----------------------------

const inputRadioCirculo = document.getElementById("radio-circulo");
const btnCirculoPerimetro = document.getElementById(
  "calcular-perimetro-circulo"
);
const btnCirculoArea = document.getElementById("calcular-area-circulo");

btnCirculoPerimetro.addEventListener("click", mostrarPerimetroCirculo);
btnCirculoArea.addEventListener("click", mostrarAreaCirculo);

function mostrarPerimetroCirculo() {
  let perimetroCirculo = calcularPerimetroCirculo(inputRadioCirculo.value);
  perimetroCirculo =
    Math.round((perimetroCirculo + Number.EPSILON) * 100) / 100;
  console.log(perimetroCirculo);
  document.getElementById(
    "respuesta-circulo"
  ).innerHTML = `${perimetroCirculo}cm`;
}
function mostrarAreaCirculo() {
  let areaCirculo = calcularAreaCirculo(inputRadioCirculo.value);
  areaCirculo = Math.round((areaCirculo + Number.EPSILON) * 100) / 100;
  document.getElementById(
    "respuesta-circulo"
  ).innerHTML = `${areaCirculo}cm<sup>2</sup>`;
}
