class Persona{


    static contadorObjetoPersona = 0; //atributo de nuestra clase 

    email = "valor default email"; //atributo de nuestro objeto

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorObjetoPersona++
        console.log("se incrementa contador :" + Persona.contadorObjetoPersona)
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
        return this._nombre + " " + this._apellido;
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
console.log( persona1 );
console.log(persona1.toString());

let empleado1 = new Empleado("Maria","Jimenez","Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar(); no es posible llamar static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetoPersona);
console.log(Persona.contadorObjetoPersona);
console.log(Empleado.contadorObjetoPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);