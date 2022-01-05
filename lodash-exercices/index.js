const _ = require('lodash');
const { invoices } = require('./data.json');

// Lodash Pick
   /* Crea un objeto compuesto por las 
   propiedades del objeto seleccionado. */
   const pick = () => {
      return _.pick(invoices[0], [ 'eventCommences', 'eventName', 'agentCode' ])
   }

// Lodash Pluck = Map

   const map = () => {
      return _.map(invoices, i => i.ticketprice * i.ticketquantity )
   }

// Lodash GroupBy
   /* Crea un objeto compuesto por claves generadas a partir de los 
   resultados de ejecutar cada elemento de la colección a través 
   de iteratee. El orden de los valores agrupados está determinado 
   por el orden en que aparecen en la colección. El valor 
   correspondiente de cada clave es una matriz de elementos 
   responsables de generar la clave. El iteratee se invoca 
   con un argumento: (valor). */

   const groupBy = () => {
      return _.groupBy(invoices[0], 'length')
   }

// Lodash Filter

   const filter = () => {
      return _.filter(invoices, {'totaldue': 0 })
   }

// Lodash Sumby

   const sumBy = () => {
      return _.sumBy(invoices, i => i.ticketquantity );
   }

console.log( 'hola mundo');
console.log( 'pick', pick() )
console.log( 'map', map() )
console.log( 'group', groupBy() )
console.log( 'filter', filter() )
console.log( 'sumby', sumBy() )