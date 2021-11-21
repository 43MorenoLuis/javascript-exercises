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
        return `[ Monitor: ${ this.idMonitor },
                Marca: ${ this._marca },
                Tamaño: ${ this._tamaño } ]`;
    }
}