/*
[Video 22] Reto: simulación de estudio de salarios
*/


function calculateSavingCapacity(){
    const budgetArray = [
        Number(document.getElementById("InputIncome").value),
        Number(document.getElementById("InputExpenses").value)
    ];
    // const InputIncome = Number(document.getElementById("InputIncome").value);
    // const InputExpenses = Number(document.getElementById("InputExpenses").value);

    const superavit = budgetArray.reduce(
        function(income, expenses){
            return income - expenses;
        }
    );

    const supera = budgetArray.reduce((income, expenses) => { return income - expenses});

    if (superavit > 0){

    } else if(superavit === 0){

    } else{

    }
    console.log(supera);
}


/***ACOORDEON***/
const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');
//const contentTextAccordion = document.querySelectorAll('.content-text-accordion');

//cuando haga Click en h2, 
	// Quitar la clase activo de Todos los bloques
	// añadir la clase activo al Bloque con la Posicion del h2

//recorrer TODOS los h2
h2.forEach((cadaH2, i) => {
	//asignando un CLICK a cada h2
	h2[i].addEventListener('click', () => {
		//recorremos todos los bloques para quitar la clase activo
		bloque.forEach((cadaBloque, j) => {
			//quitar la clase activo de TODOS los bloques
			bloque[j].classList.remove('activo')
		})
		//añadimos la clase activo al bloque cuya posicion sea igual al del h2 (linea 42)
		bloque[i].classList.add('activo')
	})
});
/***ACOORDEON***/
