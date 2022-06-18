/*
[Video 11] Crea una página web para calcular descuentos
 */

const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// console.log(
//     precioOriginal, 
//     descuento, 
//     porcentajePrecioConDescuento, 
//     precioConDescuento
// );


/*
[Video 12] Escribiendo HTML desde JavaScript
 */

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    priceValue = Number(inputPrice.value);
    const discountValue = Number(document.getElementById("InputDiscount").value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    //Escribir html desde js
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El precio con descuento es: $${precioConDescuento}`;
}