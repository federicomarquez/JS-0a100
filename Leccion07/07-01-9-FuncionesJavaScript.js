//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
    return;
}


//paso por valor
cambiarValor(x);
console.log(x);


const persona = {
    nombre: "Juan",
    apellido : "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";

}
//paso por referencia
cambiarValorObjeto(persona);
console.log(persona);