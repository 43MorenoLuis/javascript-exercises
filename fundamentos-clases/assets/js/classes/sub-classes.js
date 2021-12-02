class Persona{
    
    static _conteo = 0;

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre, codigo, frase ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

class Heroe extends Persona{

    clan = 'sin clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase );
        this.clan = 'The Avengers';
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, y pertenezco a ${ this.clan }`);
        super.quienSoy();
    }

}

const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');


console.log(spiderman);
spiderman.quienSoy();
