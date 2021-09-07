function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice")
  const priceValue = inputPrice.value
  const inputDiscount = document.getElementById("InputDiscount")
  const dicountValue = inputDiscount.value

  const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue)
  const resultPrice = document.getElementById("ResultPrice")
  resultPrice.innerText = "El precio con descuento es $" + precioConDescuento
}

// console.log({
//     precioOrginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });
