function calcularPrecioConDescuento(precio, descuento) {
  return precio - (descuento / 100) * precio;
}

function mostrarPrecioConDescuento() {
  const inputPrecio = document.getElementById("input-price");
  const inputDescuento = document.getElementById("input-discount");
  const textResultado = document.getElementById("answer");

  let resultado = calcularPrecioConDescuento(
    inputPrecio.value,
    inputDescuento.value
  );
  resultado = Math.round((resultado + Number.EPSILON) * 100) / 100;

  textResultado.innerHTML = `Tu precio con descuento es de <span>$${resultado}</span>`;
}
