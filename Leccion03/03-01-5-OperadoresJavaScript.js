let miNumero = "18x";

let edad =Number(miNumero)
console.log(edad);


if(isNaN(edad)){
    console.log("no es un numero");
}
else{
    if(edad >= 18){
        console.log("puede votar");
    }
    else{
        console.log("muy joven para votar");
    }
}

if(isNaN(edad)){
    console.log("no es un numero");
}
else{
    let Resultado = (edad >= 18)  ? "puede votar" : "no puede votar"
    console.log(Resultado);
}