//let autos = new Array("bmw","Mercedez Benz", "Volvo");   //modo viejo de declarar array
const autos = ["bmw","Mercedez Benz", "Volvo"]; 
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);
for(let i= 0; i < autos.length ; i++){
    console.log(i + " : " + autos[i]);
}