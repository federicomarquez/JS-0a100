let persona= {
    nombre: "Juan",
    apellido: "Perez",
    email:"jperez@mail.com",
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

persona.tel = "54632153";
persona.tel = ""

console.log(persona);

//concatenar cada valor de cada propiedad

console.log(persona.nombre, ",", persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
} 

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify (persona);
console.log(personaString);