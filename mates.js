const operaciones = {}; //creando objeto

function suma(n1, n2){
    return n1 + n2;
}
function resta(n1, n2){
    return n1 - n2;
}

operaciones.suma = suma;
operaciones.resta = resta;

//exports.suma = suma; //exportar funciones o var
//exports.resta = resta;

module.exports = operaciones;    //asi decimos que toda nuestra libreria es este objeto

