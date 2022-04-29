let horaDia = 19;
let mensaje;

if (horaDia >= 6 && horaDia <= 11){
    mensaje = "buenos dias";
}
else if (horaDia >= 12 && horaDia<= 18){
    mensaje = "buenas tardes";
}
else if (horaDia >= 19 && horaDia<= 24){
    mensaje = "buenas noches";
}
else if (horaDia >= 0 && horaDia<= 6){
    mensaje = "durmiendo";
}
else{
    mensaje = "no es un horarios de este planeta"
}

console.log(mensaje);