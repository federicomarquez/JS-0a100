<<<<<<< HEAD
//No es posible crear objetos antes de declarar la clase
//No se aplica el concepto de hoisting 
//let persona2 = new Persona("karla", "Juarez");

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Juan","Perez");
persona1.nombre = "juan Carlos"; //set nombre
console.log(persona1.nombre);//get nombre


let persona2 = new Persona("karla", "Juarez");
console.log(persona2);
=======
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido, departamento);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let empleado1 = new Empleado("Maria","Jimenez","Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
>>>>>>> 5ad59f7c9c1cf1d3b5368a133e93d18cd2c3bbf3
