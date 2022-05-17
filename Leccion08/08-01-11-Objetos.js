//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

Persona.prototype.tel = "44332211";

let padre = new Persona( "juan", "perez" , "jperez@mail.com");
padre.tel = "11223344"
console.log(padre.tel);


let madre = new Persona("laura","quintero","lquintana@mail.com");
console.log(madre.tel);
madre.tel = "33445566";
console.log(madre.tel);

