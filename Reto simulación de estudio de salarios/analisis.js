/*
[Video 22] Reto: simulación de estudio de salarios
*/

const budgetArray = [];

function calculateSavingCapacity(){
    budgetArray.push({
        InputIncome: Number(document.getElementById("InputIncome").value),
        InputExpenses: Number(document.getElementById("InputExpenses").value)
    });
    // const InputIncome = Number(document.getElementById("InputIncome").value);
    // const InputExpenses = Number(document.getElementById("InputExpenses").value);

    const superavit = budgetArray.reduce(
        function(sum = 0, income, expenses){
            return sum = income - expenses;
        }
    );
    // let a = superavit[0];
    // const superavit = budgetArray.sort(
    //     function (income, expenses){
    //         //si ingresos es mayor q gastos, devuelve un numero positivo
    //         //si ingresos es igual a gastos, devuelve 0
    //         //si ingresos es menor q gastos, devuelve un numero negativo
    //         return income - expenses;
    //     }
    // );

    console.log(superavit);
}