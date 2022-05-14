let persona= {
    nombre: "Juan",
    apellido: "Perez",
    email:"jperez@mail.com",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toLocaleUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toLocaleUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);