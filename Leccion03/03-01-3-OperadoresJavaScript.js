let a = 10;

if(a % 2 == 0){
    console.log("es un numero par");
}
else {
    console.log("es un numero impar");
}

let edad = 20, adulto = 18;

if(edad >= adulto){
    console.log("es un adulto");
}
else {
    console.log("es un menor de edad");
}

let u = 5;
let valMin = 0, valMax = 10;

if( u >= valMin && u <= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

let vacaciones = false, diaDescanso = true;
if(vacaciones || diaDescanso){
    console.log("padre puede asistir al juego del hijo");
}
else{
    console.log("el no puede asistir");
}