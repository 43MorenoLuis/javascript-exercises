class Orden{

    static contadorOrden = 0;

    constructor( ){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora( computadora ){
        this._computadoras.push( computadora );
    }

    mostrarOrden(){
        let comOrden = '';
        for( let computadora of this._computadoras ){
            comOrden += `\n ${ computadora }`;
        }
        console.log(`Orden: ${ this._idOrden }, Computadoras: ${ this._computadoras }`);
    }

    toString(){
        return `${ super.toString() }
                ${ this._idEmpleado }
                ${ this._sueldo }`;
    }
}