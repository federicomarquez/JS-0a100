class Producto {

    static contadorProductos = 0;

    constructor (nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto} nombre: ${this._nombre} precio: $${this._precio} `;
    }
}
class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados] = producto;
        }
        else{
            console.log("no se puede agregar mas productos");
        }
    }

    cancularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for (let producto of this._productos){
            productosOrden += "\n{" + producto.toString() +"}";
        }
        console.log(` Oden: ${this._idOrden} total: $${this.cancularTotal()}, productos ${productosOrden}`);
    }




}





let producto1 = new Producto("pantalon", 200);
let producto2 = new Producto("camisa", 100);

let Orden1 = new Orden();
Orden1.agregarProducto(producto1);
Orden1.agregarProducto(producto2);

Orden1.mostrarOrden();
let orden2 = new Orden();
let producto3 =new Producto ("cinturon" , 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();