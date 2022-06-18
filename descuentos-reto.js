/*
[Video 13] Reto: funciones más inteligentes
 */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularDescuentoAAplicar(){
    const inputPrice = document.getElementById("InputPrice");
    priceValue = Number(inputPrice.value);
    const discountCouponArray = document.getElementsByName("DiscountCoupon");

    var discountCoupon = 0;

    for (var i = 0; i <  discountCouponArray.length; i++) {
        if (discountCouponArray[i].checked) {
            discountCoupon = discountCouponArray[i].value;
        }
      }
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountCoupon);

    //Escribir html desde js
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El precio con descuento es: $${precioConDescuento}`;
}