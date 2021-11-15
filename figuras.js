//Código del cuadrado 
console.group("Cuadrados")

function perimetroCuadrado(lado){ 
    return lado * 4;
}

function areaCuadrado(lado) { 
    return lado * lado;
}

console.groupEnd();

//Código del triangulo 
console.group("Triangulos")

function alturaTriangulo(lado1, lado2, base) {
    if (lado1 === lado2)
    {
        alert("Es un triángulo isosceles")
    return ((lado1 ** 2) - ((base / 2) ** 2)) ** (1 / 2)
    }
    else {
        alert("No es un triangulo isosceles")
    }
}


function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
}

function areaTriangulo (base, altura){
    return (base * altura) / 2
}

console.groupEnd();

//Código del círculo 
console.group("Circulos")

//Radio

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return PI * (radio ** 2);
}
console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + " cm" )
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + " cm" ) 
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1")
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2")
    const value2 = input2.value;
    const input3 = document.getElementById("InputBase")
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triángulo es: " + perimetro + " cm" )
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputBase")
    const value = input.value;
    const input1 = document.getElementById("InputAltura")
    const value1 = input1.value;

    const area = areaTriangulo(value, value1);
    alert("El área del triángulo es: " + area + " cm^2" ) 
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro + " cm" )
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value;

    const area = areaCirculo(value);
    alert("El área del circulo es: " + area + " cm^2" ) 
}