const libMates = require('./mates.js'); //libMates es un objeto (o con las funciones exportadas, o directamete el onjeto que queramos)
const libHola = require('./hola.js'); //esta libreria solo consta de una funcion, y la var es una funcion

console.log(libMates);


console.log(libHola("Mani"));

console.log(libMates.suma(1,3));
console.log(libMates.resta(8,3));