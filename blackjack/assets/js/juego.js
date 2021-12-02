( () => {
    'use strict'
    
    let deck = [];
    const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

    // Puntos
    let puntosJugadores = [];

    // Referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    // Esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        
        deck = crearDeck();
        puntosJugadores = [];

        for( let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta funcion permite crear una nueva baraja
    const crearDeck = () => {

        deck = [];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push( i + tipo );
            }    
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push( esp + tipo );
            }        
        }

        return _.shuffle( deck );
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {
              
        if( deck.length === 0 ){
            throw 'No hay cartas en el deck';
        }
        
        return deck.pop();
    }

    // Esta funcion me permite saber el valor de la carta
    const valorCarta = ( carta ) => {
        const valor = carta.substring( 0, carta.length -1 );
        
        return ( isNaN ( valor ) ) ?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1; 
    }

    // Funcion acumular puntos
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerHTML = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    // Funcion crea las cartas de los jugadores
    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');

        divCartasJugadores[turno].append( imgCarta );
    }

    // Funcion determinar ganador
    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ){
                alert('Nadie Gana');
            }else if ( puntosMinimos > 21 ){
                alert('Computadora Gana');
            }else if( puntosComputadora > 21 ){
                alert('Jugador Gana');
            }else{
                alert('Computadora Gana');
            }
        }, 1000);
    }

    // Funcion turno Computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta( carta, puntosJugadores.length - 1 );

        } while (( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ));
        determinarGanador();
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0 );

        if( puntosJugador > 21 ){

            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ){

            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });

    btnDetener.addEventListener('click', () => {
        
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] );

    });

    btnNuevo.addEventListener('click', () => {
        
        inicializarJuego();

    });

})();