class Persona{


    static contadorPersona = 0; //atributo de nuestra clase 

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return  this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    //sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //se aplica polimorfismo(mulriples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("saludos desde metodo static")
    }
    static saludar2(persona1){
        console.log(persona1.nombre + " " + persona1.apellido )
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido, departamento);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobree escritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString() );

let empleado1 = new Empleado("Maria","Jimenez","Sistemas");
console.log( empleado1.toString() );

console.log(Persona.contadorPersona);

let persona2 = new Persona("karla","ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersona);










