// Taller 1 --------------------

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
// Área del circulo con la fórmula de Heron
function semiperimetroCirculo(lado1, lado2, base) {
  return (lado1 + lado2 + base) / 2;
}
function calcularAreaTriangulo(lado1, lado2, base) {
  return Math.sqrt(
    semiperimetroCirculo(lado1, lado2, base) *
      (semiperimetroCirculo(lado1, lado2, base) - lado1) *
      (semiperimetroCirculo(lado1, lado2, base) - lado2) *
      (semiperimetroCirculo(lado1, lado2, base) - base)
  );
}
// Circulo
function calcularPerimetroCirculo(r) {
  return 2 * r * Math.PI;
}
function calcularAreaCirculo(r) {
  return Math.PI * r ** 2;
}

// Taller 2 --------------------

function calcularPrecioConDescuento(precio, descuento) {
  return ((100 - descuento) / 100) * precio;
}
function calcularConDescuentoMasCupon(precio, descuento, cupon) {
  return ((100 - descuento - cupon) / 100) * precio;
}

// Taller 3 --------------------

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

// Extras --------------

function redondeoAlCentesimo(numero) {
  // Formula redondeo al centesimo
  numero = Math.round((numero + Number.EPSILON) * 100) / 100;
  return numero;
}
