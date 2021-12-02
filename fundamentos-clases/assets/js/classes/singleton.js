// Es una Instancia unica de mi clase

class Singleton{
    static instancia;
    nombre = '';

    constructor( nombre = '' ) {
        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('SpiderMan');

console.log(instancia1);
console.log(instancia2);
