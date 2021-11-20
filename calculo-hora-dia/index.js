/*
    6am-11am - Buenos dias
    12pm-18pm - Buenas tardes
    19pm-24pm - Buenas noches
    0am-6am - Durmiendo
*/

let horaDia = 8;
let mensaje; 

if ( horaDia >= 6 && horaDia <= 11 ) {
    mensaje = 'Buenos Dias';
} else if ( horaDia >= 12 && horaDia <= 15 ){
    mensaje = 'Buenas Tardes';
} else if ( horaDia >= 19 && horaDia <= 24 ){
    mensaje = 'Buenas Noches';
}else if( horaDia >= 0 && horaDia < 6 ){
    mensaje = 'Durmiendo';
}

console.log(mensaje);