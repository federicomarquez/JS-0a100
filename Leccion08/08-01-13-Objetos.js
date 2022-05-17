let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    nombreCompleto :function(titulo, tel){
        return titulo + " " +this.nombre+ " " + this.apellido + " , " + tel ;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//uso de call para usar
//el metodo persona1.nombreCompleto con los datos de persona 2 

console.log(persona1.nombreCompleto("licensiado", "77889944"));


console.log(persona1.nombreCompleto.call(persona2, "ing:", "5544332211"))