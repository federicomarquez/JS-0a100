//let autos = new Array("bmw","Mercedez Benz", "Volvo");   //modo viejo de declarar array
const autos = ["bmw","Mercedez Benz", "Volvo"]; 
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);
for(let i= 0; i < autos.length ; i++){
    console.log(i + " : " + autos[i]);
}


autos [1] = "MercedezBenz";
console.log(autos[1]); 

autos.push("Audi");
console.log(autos);

console.log(autos.length);

autos[autos.length] = "cadillac";

console.log(autos);

autos[6] = "proshe";
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);


