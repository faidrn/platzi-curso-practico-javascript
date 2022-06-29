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

