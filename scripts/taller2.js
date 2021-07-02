function calcularPrecioConDescuento(precio, descuento) {
  return ((100 - descuento) / 100) * precio;
}
function calcularConDescuentoMasCupon(precio, descuento, cupon) {
  return ((100 - descuento - cupon) / 100) * precio;
}

function mostrarNuevoPrecio() {
  const inputPrecio = document.getElementById("input-price");
  const inputDescuento = document.getElementById("input-discount");
  const inputCupon = document.getElementById("input-coupon");
  const textResultado = document.getElementById("answer");

  if (inputPrecio.value != 0 && inputDescuento.value != 0) {
    let resultado = 0;
    if (inputCupon.value != 0) {
      // Validar cupon "Platzi"
      let valorCupon = 0;
      inputCupon.value = inputCupon.value.toLowerCase();
      if (inputCupon.value == "platzi") {
        valorCupon = 5;
      } else {
        valorCupon = 0;
      }
      console.log(inputCupon.value);
      console.log(valorCupon);
      resultado = calcularConDescuentoMasCupon(
        inputPrecio.value,
        inputDescuento.value,
        valorCupon
      );
    } else {
      resultado = calcularPrecioConDescuento(
        inputPrecio.value,
        inputDescuento.value
      );
    }
    resultado = Math.round((resultado + Number.EPSILON) * 100) / 100;

    textResultado.innerHTML = `Resultado final: <span>$${resultado}</span>`;
  } else {
    textResultado.innerHTML = `Faltan datos ❗❗`;
  }
}
