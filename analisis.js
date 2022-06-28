/*
[Video 20] Calculando la mediana de salarios
*/

// Helpers
/*las funciones helpers son funciones q no son parte de la 
logica del negocio (del analisis q se hace), pero se necesitan en el algorito*/
function esPar(numerito){
    //retorna true o false
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculadore de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2); //quitamos los decimales al resultado

    if (esPar(lista.length)){
        //si es par necesitamos tomar las dos personas de la mitad
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;
    } else{
        //si es impar solo se necesita encontrar a la persona de la mitad
        const personitaMitad = lista[mitad];

        return personitaMitad;
    }
}

// Mediana general
const salariosCol = colombia.map(
    //funcion anonima, q permite iterar por cada persona del array de salarios(colombia)
    function(personita){
        //crea un array de salarios por cada persona
        return personita.salary;
    }
);

//ordenamos los salarios de menor a mayor
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

/*console.log(
    medianaSalarios(salariosColSorted)
);*/

/*
[Video 21] Calculando el top 10% de salarios
*/

const medianaGeneral = medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100; //90%
const spliceCount = salariosColSorted.length - spliceStart;  //10%

/*el metodo splice(posicion de inicio, cantidad de elementos a sacar), corta del array la cantidad de elementos indicados, 
iniciando en la posicion indicada*/
const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneral, 
    medianaTop10Col
);