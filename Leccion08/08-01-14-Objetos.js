let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    nombreCompleto :function(titulo, tel){
        return titulo +": "+this.nombre+ " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//uso de apply para usar
//el metodo persona1.nombreCompleto con los datos de persona 2 

console.log(persona1.nombreCompleto("lic", "66551122"));

let Arreglo = ["ing", "55667744"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));