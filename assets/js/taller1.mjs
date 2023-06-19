import { Square, Triangle, Circle } from "./math.mjs";

// Cuadrado -----------------------------

const inputLadoCuadrado = document.getElementById("lado-cuadrado");
const btnCuadradoPerimetro = document.getElementById(
  "calcular-perimetro-cuadrado"
);
const btnCuadradoArea = document.getElementById("calcular-area-cuadrado");
const resultadoCuadrado = document.getElementById("respuesta-cuadrado");

btnCuadradoPerimetro.addEventListener("click", mostrarPerimetroCuadrado);
btnCuadradoArea.addEventListener("click", mostrarAreaCuadrado);

function mostrarPerimetroCuadrado() {
  if (inputLadoCuadrado.value != 0) {
    let cuadrado = new Square(inputLadoCuadrado.value);
    resultadoCuadrado.innerHTML = cuadrado.perimeter;
  } else {
    resultadoCuadrado.innerHTML = `Missing data 😕`;
  }
}
function mostrarAreaCuadrado() {
  if (inputLadoCuadrado.value != 0) {
    let cuadrado = new Square(inputLadoCuadrado.value);
    resultadoCuadrado.innerHTML = cuadrado.area;
  } else {
    resultadoCuadrado.innerHTML = `Missing data 😕`;
  }
}

// Triángulo -----------------------------

const inputLadoUnoTriangulo = document.getElementById("lado1-triangulo");
const inputLadoDosTriangulo = document.getElementById("lado2-triangulo");
const inputBaseTriangulo = document.getElementById("base-triangulo");
const btnTrianguloPerimetro = document.getElementById(
  "calcular-perimetro-triangulo"
);
const btnTrianguloArea = document.getElementById("calcular-area-triangulo");
const resultadoTriangulo = document.getElementById("respuesta-triangulo");

btnTrianguloPerimetro.addEventListener("click", mostrarPerimetroTriangulo);
btnTrianguloArea.addEventListener("click", mostrarAreaTriangulo);

function mostrarPerimetroTriangulo() {
  if (
    inputLadoUnoTriangulo.value != 0 &&
    inputLadoDosTriangulo.value != 0 &&
    inputBaseTriangulo.value != 0
  ) {
    let triangulo = new Triangle(
      inputLadoUnoTriangulo.value,
      inputLadoDosTriangulo.value,
      inputBaseTriangulo.value
    );
    resultadoTriangulo.innerHTML = `${triangulo.perimeter}`;
  } else {
    resultadoTriangulo.innerHTML = `Missing data 😕`;
  }
}
function mostrarAreaTriangulo() {
  if (
    inputLadoUnoTriangulo.value != 0 &&
    inputLadoDosTriangulo.value != 0 &&
    inputBaseTriangulo.value != 0
  ) {
    let triangulo = new Triangle(
      inputLadoUnoTriangulo.value,
      inputLadoDosTriangulo.value,
      inputBaseTriangulo.value
    );
    resultadoTriangulo.innerHTML = triangulo.area;
  } else {
    resultadoTriangulo.innerHTML = `Missing data 😕`;
  }
}

// Circulo -----------------------------

const inputRadioCirculo = document.getElementById("radio-circulo");
const btnCirculoPerimetro = document.getElementById(
  "calcular-perimetro-circulo"
);
const btnCirculoArea = document.getElementById("calcular-area-circulo");
const resultadoCirculo = document.getElementById("respuesta-circulo");

btnCirculoPerimetro.addEventListener("click", mostrarPerimetroCirculo);
btnCirculoArea.addEventListener("click", mostrarAreaCirculo);

function mostrarPerimetroCirculo() {
  if (inputRadioCirculo.value != 0) {
    let circulo = new Circle(inputRadioCirculo.value);
    resultadoCirculo.innerHTML = circulo.perimeter;
  } else {
    resultadoCirculo.innerHTML = `Missing data 😕`;
  }
}
function mostrarAreaCirculo() {
  if (inputRadioCirculo.value != 0) {
    let circulo = new Circle(inputRadioCirculo.value);
    resultadoCirculo.innerHTML = circulo.area;
  } else {
    resultadoCirculo.innerHTML = `Missing data 😕`;
  }
}
