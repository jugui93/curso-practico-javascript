const lista1 = [
    1,
    2,
    3,
    2,
    2,
    5,
    3,
    89,
    7,
    2,
    3,
    4,
    7,
    45,
]
const lista1Count = {};

function calcularModa(lista) {

    const listaCount = {};

    lista.map(
        function (elemento) {
        if (listaCount[elemento]) {
        listaCount[elemento] += 1;
        }else {
        listaCount[elemento] = 1;
        }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
        return a[1] - b[1];
        }
    )

    const moda = listaArray[listaArray.length - 1][0];
    return moda;
}