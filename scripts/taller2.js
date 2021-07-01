function calcularPrecioConDescuento(precio, descuento) {
  return precio - (descuento / 100) * precio;
}

function mostrarPrecioConDescuento() {
  const inputPrecio = document.getElementById("input-price");
  const inputDescuento = document.getElementById("input-discount");
  const textResultado = document.getElementById("answer");

  if (inputPrecio.value != 0 && inputDescuento.value != 0) {
    let resultado = calcularPrecioConDescuento(
      inputPrecio.value,
      inputDescuento.value
    );
    resultado = Math.round((resultado + Number.EPSILON) * 100) / 100;

    textResultado.innerHTML = `Resultado final: <span>$${resultado}</span>`;
  } else {
    textResultado.innerHTML = `Faltan datos ❗❗`;
  }
}
