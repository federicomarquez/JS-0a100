//Declaracion de la funcion
function miFuncion(a, b) {
    return a + b;
}

//Llamado a la funcion
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion funcion de tipo expresion
let sumar = function(a, b){return a + b };

resultado = sumar(1, 2);
console.log(resultado);