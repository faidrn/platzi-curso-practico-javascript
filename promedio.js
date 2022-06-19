/*
[Video 15] Calculando el promedio en JavaScript
*/

function calcularMediaAritmetica(lista){
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    /*El método reduce() ejecuta una función reductora 
    sobre cada elemento de un array, devolviendo como 
    resultado un único valor, de acuerdo a la operacion 
    matematica indicada.*/
    /*
    valorAcumulado => acumulador, El acumulador acumula el 
            valor devuelto por la función callback. Es el 
            valor acumulado devuelto en la última invocación 
            de callback, o el valorInicial, si se proveyó
    nuevoElemento => valor actual, El elemento actual que 
            está siendo procesado en el array.
    */
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}