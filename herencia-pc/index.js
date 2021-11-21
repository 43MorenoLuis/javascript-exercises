class DispositivoEntrada{
    constructor( tipoEntrada, marca ){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada () {
        return this._tipoEntrada;
    }
    set tipoEntrada ( tipoEntrada ) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca () {
        return this._marca;
    }

    set marca ( marca ) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRaton = 0;

    constructor( tipoEntrada, marca ){
        super( tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRaton;
    }

    get idRaton(){
        return this._idRaton;
    }

    get tipoEntrada () {
        return this._tipoEntrada;
    }
    
    set tipoEntrada ( tipoEntrada ) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca () {
        return this._marca;
    }
    
    set marca ( marca ) {
        this._marca = marca;
    }

    toString(){
        return `Raton: ${ this._idRaton }
                TipoEntrada: ${ this._tipoEntrada }
                Marca: ${ this._marca }`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor( tipoEntrada, marca ){
        super( tipoEntrada, marca );
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: ${ this._idTeclado }
                TipoEntrada: ${ this._tipoEntrada } 
                Marca: ${ this._marca }`;
    }
}

class Monitor {

    static contadorMonitor = 0;

    constructor( marca, tamaño ){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca( marca ){
        return this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño( tamaño ){
        return this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: ${ this.idMonitor }
                Marca: ${ this._marca }
                Tamaño: ${ this._tamaño }`;
    }
}

class Computadora{

    static contadorComputadora = 0;

    constructor( nombre, monitor, teclado, raton ){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString(){
        return `Computadora: 
                ${ this._idComputadora }: 
                ${ this._nombre }
                [ 
                    ${ this._monitor }, \n
                    ${ this._raton } \n
                    ${ this._teclado } 
                ]`;
    }
}

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

let monitor1 = new Monitor('HP', 14);
let raton1 = new Raton('USB', 'SION');
let teclado1 = new Teclado('Bluetooth', 'MSI');

let monitor2 = new Monitor('AZUS', 12);
let raton2 = new Raton('USB', 'HP');
let teclado2 = new Teclado('USB', 'ACER');

let computadora1 = new Computadora('Lenovo', monitor1, raton1, teclado1);
let computadora2 = new Computadora('Acer', monitor2, raton2, teclado2);

let orden1 = new Orden();

// console.log( teclado1.toString() );
// console.log( monitor1.toString() );
// console.log( raton1.toString() );
// console.log( `${ computadora1 }` );
// console.log( `${ computadora2 }` );

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();