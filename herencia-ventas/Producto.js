class Producto{

    static contadorProductos = 0;

    constructor( nombre, precio ){
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

    set nombre( nombre ){
        return this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio( precio ){
        return this._precio = precio;
    }

    toString(){
        return `
            ${ this._idProducto } 
            ${ this._nombre }  
            ${ this._precio }`;
    }
}

const persona1 = new Persona( 'Luis', 'Moreno', '22');

console.log( persona1.toString() );