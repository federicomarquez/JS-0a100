/*
Ejemplo de tipo de datos en JavaScript
*/
//Tipo de dato String
var nombre = "Federico";
console.log(nombre);
console.log(typeof nombre);

nombre = 10.5;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55412364"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato Boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);
var bandera = false;
console.log(bandera);

//tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//tipo de clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//tipo undefined
var x;
console.log(x);
console.log(typeof x);

x =undefined;
console.log(x);
console.log(typeof x);

//tipo null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//arreglos (es un objeto y si nos paramos sobre el "var autos" marca [] entonces es arreglo)
var autos = ['BMW','Audi' ,'Volvo'];
console.log(autos);
console.log(typeof autos);

//si el valor es vacio es undefined pero si tiene '' o "" es una String vacia
var z = '';
console.log(z);
console.log(typeof z);





