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