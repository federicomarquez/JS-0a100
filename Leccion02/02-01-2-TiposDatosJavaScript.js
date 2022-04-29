var nombre = 'Juan';
var apellido = "Perez";

var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);
//se pone un + con " " para agregar un espacio entre ambos 
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 219;
console.log(x);
var x = nombre + 2 + 4 ;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

//como las expresiones se evaluan de derecha a izquierda lo que encuentra primero es como lo toma 