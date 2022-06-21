/*
[Video 18] Reto: calcula otros tipos de promedio
*/

function calcularMediaArmonica(lista){

    let sumaLista = 0;

    lista.forEach(
        function sumatoria(elemento){
            sumaLista += 1 / elemento;
        }
    );
        
    const mediaArmonica = lista.length / sumaLista;

    return mediaArmonica;
}