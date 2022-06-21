/*
[Video 16] Calculando la mediana en Javascript - RETO 1
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

function esPar(numerito){
    // si numerito es par se retorna true, sino se retorna false
    // % modulo de la division
    if (numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}

function calcuarMediana(lista){
    lista = ordenamientoBurbuja(lista);
    console.log(lista);
    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1]; //elemento anterior al elemento de la mitad
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1, elemento2
        ]);

        mediana = promedioElemento1y2;
    } else{
        mediana = lista1[mitadLista1];
    }

    return mediana;
}

// RETO 2 - Ordenar la lista
function ordenamientoBurbuja(lista){
    const tamanioLista = lista.length;
    for (let i = 0; i < tamanioLista; i++) {
      for (let j = 0; j < tamanioLista - 1 - i; j++) {
        if (lista[j] > lista[j + 1]) {
          [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
        }
      }
    }
  
    return lista;
}