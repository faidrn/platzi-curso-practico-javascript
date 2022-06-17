/*
Reto: matemáticas con JavaScript
 */

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("InputLado1Triangulo").value;
    const lado2 = document.getElementById("InputLado2Triangulo").value;
    const base = document.getElementById("InputBaseTriangulo").value;

    if (lado1 == lado2){
        if (lado1 != base){
            const altura = Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
            alert(`la altura del triángulo es ${altura}`);
        } else{
            alert("No es un triángulo isósceles, el lado 1 no puede ser igual a la base");
        }
    } else{
        alert("No es un triángulo isósceles, el lado 1 no puede ser diferente al lado 2")
    }
    
}