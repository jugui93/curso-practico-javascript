


function calcularMediaAritmetica(lista) {
    /* let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    } */
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;  

    return promedioLista;
}

function onClickButtonAverage() {
    const inputNumbers = document.getElementById("InputNumbers");
    const inputNumbers1 = inputNumbers.value;
    const listNumbers = inputNumbers1.split(',').map(Number) ;
    
    const promedio = calcularMediaAritmetica(listNumbers);

    const resultAverage = document.getElementById("ResultAverage");
    resultAverage.innerText = `El promedio es: \$${promedio}`;
}

