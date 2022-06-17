/*
[Video 7] Encapsulando código en funciones
 */

//Código del cuadrado
console.group("Cuadrados");
    function perimetroCuadrado(lado){
        return lado * 4;
    }

    function areaCuadrado(lado){
        return lado * lado;
    }
console.groupEnd();

console.group("Triángulos");
    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura){
        return(base * altura) / 2;
    }

console.groupEnd();

console.group("Círculos");
    function diametroCirculo(radio){
        return radio * 2;
    }

    const PI = Math.PI;
    
    console.log("PI es: "+PI);
    
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

/*
[Video 8] Interactuando con JavaScript desde HTML
 */

//Aqui interactuamos con el codigo html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1Triangulo").value;
    const lado2 = document.getElementById("InputLado2Triangulo").value;
    const base = document.getElementById("InputBaseTriangulo").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBaseTriangulo").value;
    const altura = document.getElementById("InputAlturaTriangulo").value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputLado1Triangulo").value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputLado1Triangulo").value;

    const area = areaCirculo(radio)
    alert(area);
}