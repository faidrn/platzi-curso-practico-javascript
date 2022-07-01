/*
[Video 22] Reto: simulación de estudio de salarios
*/

let incomesArray = [];
let expensesArray = [];

function appendIncomes(){
	const nameIncome = document.getElementById("selectIncomeType").value;
	const incomeValue = Number(document.getElementById("InputIncome").value);
	
	if (nameIncome != ""){
		if (incomeValue != ""){
			
			incomesArray.push({
				income: nameIncome, 
				incomeValue: incomeValue
			});

			document.getElementById("selectIncomeType").value = "";
			document.getElementById("InputIncome").value = "";

			calculateSavingCapacity();
			//console.log(incomesValuesArray);
		} else{
			return false;
		}
	} else{
		return false;
	}
	
}


function appendExpenses(){
	const nameExpense = document.getElementById("selectExpensesType").value;
	const expenseValue = Number(document.getElementById("InputExpenses").value);
	
	if (nameExpense != ""){
		if (expenseValue != ""){
			expensesArray.push({
				expense: nameExpense, 
				expenseValue: expenseValue
			});

			document.getElementById("selectExpensesType").value = "";
			document.getElementById("InputExpenses").value = "";

			calculateSavingCapacity();
		} else{
			return false;
		}
	} else{
		return false;
	}
	
}

function summation(valuesList){
	//obtener un nuevo vector con SOLO numeros
	let numberArray = valuesList.map(function(newArray) {
		return newArray.incomeValue;		   
	});
	
	const total = numberArray.reduce(
		function(previousValue = 0, value){
			return previousValue + value;
		}
	);
	
	return total;
}


function calculateSavingCapacity(){
	const resultResidue = document.getElementById("resultResidue");
	
	//Validar que los vectores de ingresos y egresos NO esten vacios
	
	if (incomesArray.length > 0){
		if (expensesArray.length > 0){
			
			//Sumar ingresos
			const totalIncomes = summation(incomesArray);
						
			//sumar egresos
			const totalExpenses = summation(expensesArray);

			const superavit = totalIncomes - totalExpenses;
			
			//Escribir html desde js
    		resultResidue.innerText = `$ ${superavit}`;
			
			if (superavit > 0){
				

			} else if(superavit === 0){

			} else{

			}
			
		} else{
			return false;
		}
	}
    
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
