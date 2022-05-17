//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

let padre = new Persona( "juan", "perez" , "jperez@mail.com");
console.log(padre)
console.log(padre.nombreCompleto());

let madre = new Persona("laura","quintero","lquintana@mail.com");
console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = "Carlos";

console.log(padre);
console.log(madre);
console.log(padre.nombreCompleto());