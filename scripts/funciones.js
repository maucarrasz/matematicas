function redondeoAlCentesimo(numero) {
  // Formula redondeo al centesimo
  numero = Math.round((numero + Number.EPSILON) * 100) / 100;
  return numero;
}
