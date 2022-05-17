//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona( "juan", "perez" , "jperez@mail.com");
console.log(padre)

let madre = new Persona("laura","quintero","lquintana@mail.com");
console.log(madre);

padre.nombre = "Carlos";

console.log(padre);
console.log(madre);