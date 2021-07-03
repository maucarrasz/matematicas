function calcularPrecioConDescuento(precio, descuento) {
  return ((100 - descuento) / 100) * precio;
}
function calcularConDescuentoMasCupon(precio, descuento, cupon) {
  return ((100 - descuento - cupon) / 100) * precio;
}

const coupons = ["holamundo", "enigma42", "platzi"];

function mostrarNuevoPrecio() {
  const inputPrecio = document.getElementById("input-price");
  const inputDescuento = document.getElementById("input-discount");
  const inputCupon = document.getElementById("input-coupon");
  const textResultado = document.getElementById("answer");
  let precioValue = inputPrecio.value;
  let descuentoValue = inputDescuento.value;
  let userInputCupon = inputCupon.value;
  if (precioValue != 0 && descuentoValue != 0) {
    let resultado = 0;
    if (userInputCupon != "") {
      let cuponValue = 0;
      userInputCupon = userInputCupon.toLowerCase();
      // Validar cual cupon es
      if (!coupons.includes(userInputCupon)) {
        alert(`The coupon "${userInputCupon}" is invalid`);
      } else if (userInputCupon === coupons[0]) {
        cuponValue = 5;
      } else if (userInputCupon === coupons[1]) {
        cuponValue = 10;
      } else if (userInputCupon === coupons[2]) {
        cuponValue = 15;
      }
      resultado = calcularConDescuentoMasCupon(
        precioValue,
        descuentoValue,
        cuponValue
      );
    } else {
      resultado = calcularPrecioConDescuento(precioValue, descuentoValue);
    }
    resultado = redondeoAlCentesimo(resultado);
    textResultado.innerHTML = `Final score: <span>$${resultado}</span>`;
  } else {
    textResultado.innerHTML = `Missing data ❗❗`;
  }
}
