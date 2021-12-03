function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;  

    return promedioLista;
}

function esPar(num) {
    if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


const lista = [
    100,
    306,
    5664,
    587,
    908863,
    5430,
] ;

function calcularMediana(lista){

const mitadLista = parseInt(lista.length / 2);

lista.sort (function (a,b){ return a - b;});

let mediana;

if (esPar(lista.length)){
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    mediana = promedioElemento1y2;
}else{
    mediana = lista[mitadLista];
}
return mediana
}