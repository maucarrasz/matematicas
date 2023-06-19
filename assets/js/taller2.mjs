import { DiscountCalculator } from "./math.mjs";

const inputPrecio = document.getElementById("input-price");
const inputDescuento = document.getElementById("input-discount");
const inputCupon = document.getElementById("input-coupon");
const textResultado = document.getElementById("answer");
const btnCalculate = document.getElementById("btn-calculate");
const coupons = { dev: 5, platzi: 10, enigma42: 15 };

btnCalculate.addEventListener("click", mostrarNuevoPrecio);

function mostrarNuevoPrecio() {
  let calculator = new DiscountCalculator(
    inputPrecio.value,
    inputDescuento.value
  );
  if (calculator.price != 0 && calculator.discount >= 0) {
    const couponId = Object.keys(coupons).indexOf(
      inputCupon.value.toLowerCase()
    );
    if (couponId != -1) {
      calculator.coupon = Object.values(coupons)[couponId];
    }
    textResultado.innerHTML = calculator.priceWithDiscount;
  } else {
    textResultado.innerHTML = `Missing data ❗❗`;
  }
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 || event.key === "Enter") {
    mostrarNuevoPrecio();
  }
});
