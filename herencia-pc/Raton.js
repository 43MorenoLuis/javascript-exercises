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