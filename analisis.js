// Funciones helpers
function esPar(num) {
    return (num % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;  

    return promedioLista;
}
// Calculadora Mediana
function medianaSalarios(lista){

    const mitadLista = parseInt(lista.length / 2);

    let mediana;

    if (esPar(lista.length)){
        const persona1 = lista[mitadLista];
        const persona2 = lista[mitadLista - 1];

        const mediana = calcularMediaAritmetica([
            persona1,
            persona2,
        ])
        return mediana;
    }else{
        mediana = lista[mitadLista];
        return mediana
    }
}
// Mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort( 
    function (salaryA, salaryB){
       return salaryA - salaryB;
    }
);
const medianaGeneralCol = medianaSalarios(salariosColSorted);
// Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const splicecount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, splicecount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
}
)

