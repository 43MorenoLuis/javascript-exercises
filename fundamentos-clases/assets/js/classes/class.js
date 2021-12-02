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

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona( 'Tony Stark', 'IronMan', 'Yo Soy IronMan');

// console.log(spiderman);
// console.log(ironman);
spiderman.miFrase();

spiderman.setComidaFavorita='El pie de cereza de la tia May';

console.log(spiderman);
console.log(spiderman.getComidaFavorita);
console.log(Persona._conteo);
// ironman.quienSoy();
// spiderman.miFrase();
// ironman.miFrase();