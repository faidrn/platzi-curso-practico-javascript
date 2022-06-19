/*
[Video 16] Calculando la mediana en Javascript
*/

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    100, 
    200, 
    500, 
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    // si numerito es par se retorna true, sino se retorna false
    // % modulo de la division
    if (numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    // si lista1 es par?
    // necesitamos dos elementos 
    // -> el promedio
    // -> mediana
    const elemento1 = lista1[mitadLista1 - 1]; //elemento anterior al elemento de la mitad
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, elemento2
    ]);

    mediana = promedioElemento1y2;
} else{
    // posicion mitadLista1 dentro lista1
    // -> mediana
    mediana = lista1[mitadLista1];
}