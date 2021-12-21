const notes = [
    {
        item: "Primer parcial",
        note: 7,
        percentage: 20,
    },
    {
        item: "Segundo parcial",
        note: 8,
        percentage: 20,
    },
    {
        item: "Primer taller",
        note: 9,
        percentage: 10,
    },
    {
        item: "Segundo taller",
        note: 10,
        percentage: 15,
    },
    {
        item: "Taller final",
        note: 8,
        percentage: 15,
    }, 
    {
        item: "Final",
        note: 6,
        percentage: 20,
    }, 
]

function calcularMediaAritmetica (notes) {

    const notesWithPercentage = notes.map(function(noteObject){
        return noteObject.note * noteObject.percentage;
    });

    const sumOfNotesWithPercentages = notesWithPercentage.reduce(
        function(sum=0, newVal){
            return sum + newVal;
        }
    );

    const percentages = notes.map(function(noteObject){
        return noteObject.percentage;
        }
    );

    const sumOfPercentages = percentages.reduce(
        function(sum=0, newVal){
            return sum + newVal;
        }
    );

    const promedioNotaPonderada = sumOfNotesWithPercentages / sumOfPercentages;

    return promedioNotaPonderada; 
}