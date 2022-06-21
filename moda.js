/*
[video 17] - Calculando la moda en Javascript
 */

const lista1 = [
    1, 
    2, 
    3, 
    1, 
    2, 
    3, 
    4, 
    2, 
    2, 
    2, 
    1
];

function calcularModa(lista){
    //objeto vacio
    const lista1Count = {};

    //usamos el metodo map para llenar el objeto lista1Count
    lista.map(
        function(elemento){
            //guardamos en el objeto vacio la cantidad de veces q el 
            //elemento aparece, agregando cada elemento y luego iterando
            //la cantidad de veces q aparece
            
            //validamos si el elemento existe y le sumamos 1, sino
            //solo agregamos 1 al elemento
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else{
                lista1Count[elemento] = 1;
            }
            
        }
    );

    //volvemos a convertir el objeto en un array
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            //si nuevoValor es menor q valorAcumulado, devolvemos 1 o un numero positivo
            //si valorAcumulado es igual a nuevoValor, devolvemos 0
            //si valorAcumulado es menor q nuevoValor, devolvemos -1 o un numero negativo
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    //el valor q mas se repite (moda) se encuentra en la ultima 
    //posicion del array
    //se le resta 1 al tamaño del array xq las posiciones inician 
    //a contar desde 0
    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}

/*
aporte codigo reducido
const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5
 */