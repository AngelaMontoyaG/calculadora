function suma(num1, num2){
    resultado = +num1 + +num2;
    return resultado;
}

function sumar(){
    let elementoNumero1 = document.getElementById("num1");
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoSuma = suma(elementoNumero1.value, elementoNumero2.value);
    
    elementoTexto.textContent = elementoSuma;
}

function resta(num1,num2){
    resultado = num1 - num2;
    return resultado
}

function restar(){
    let elementoNumero1 = document.getElementById("num1");
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoResta = resta(elementoNumero1.value, elementoNumero2.value);
    
    elementoTexto.textContent = elementoResta;
}

function multiplicacion(num1,num2) {
    resultado = num1 * num2;
    return resultado
}

function multiplicar(){
    let elementoNumero1 = document.getElementById("num1");
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoMulti = multiplicacion(elementoNumero1.value, elementoNumero2.value);
    
    elementoTexto.textContent = elementoMulti;
}

function division(num1,num2){
    resultado = num1 / num2;
    return resultado
}

function dividir(){
    let elementoNumero1 = document.getElementById("num1");
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoDiv = division(elementoNumero1.value, elementoNumero2.value);
    
    elementoTexto.textContent = elementoDiv;
}

function radical(num2) {
    resultado = Math.sqrt(num2);
    return resultado
}

function raiz(){
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoRaiz = radical( elementoNumero2.value);
    
    elementoTexto.textContent = elementoRaiz;
}


function potencia(num1,num2) {
    resultado = Math.pow(num1,num2);
    return resultado
}

function potenciar(){
    let elementoNumero1 = document.getElementById("num1");
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoPotencia = potencia(elementoNumero1.value, elementoNumero2.value);
    
    elementoTexto.textContent = elementoPotencia;
}


function valor__absoluto(num2) {
    resultado = Math.abs(num2);
    return resultado
}

function absoluto() {
    let elementoNumero2 = document.getElementById("num2");
    let elementoTexto = document.getElementById("textoResultado");
    let elementoAbs = valor__absoluto( elementoNumero2.value);
    
    elementoTexto.textContent = elementoAbs;
}


function crearAleatorio(minimo, maximo) {
    maximo = maximo + 1;
    resultado = Math.floor(Math.random() * (maximo - minimo) + minimo);
    return  resultado
}

function random() {
    let elementoNumero1 = parseInt(document.getElementById("num1").value);
    let elementoNumero2 = parseInt(document.getElementById("num2").value);
    let elementoTexto = document.getElementById("textoResultado");
    let elementoAleatorio = crearAleatorio(elementoNumero1, elementoNumero2);
    
    elementoTexto.textContent = elementoAleatorio;
}


function round(resultado) {
    return Math.round(resultado)
}

function mostrar__round() {
    let elementoTexto = document.getElementById("textoResultado");
    let aux = parseFloat(elementoTexto.textContent);
    let elementoRound = round(aux)

    elementoTexto.textContent = elementoRound;
}


function floor(resultado) {
    return Math.floor(resultado)
}

function mostrar__floor() {
    let elementoTexto = document.getElementById("textoResultado");
    let aux = parseInt(elementoTexto.textContent);
    let elementoFloor = floor(aux)

    elementoTexto.textContent = elementoFloor;
}



function ceil(resultado) {
    return Math.ceil(resultado)
}

function mostrar__ceil() {
    let elementoTexto = document.getElementById("textoResultado");
    let aux = parseFloat(elementoTexto.textContent);
    let elementoCeil = ceil(aux)

    elementoTexto.textContent = elementoCeil;
}

