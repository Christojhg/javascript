'use strict'
//el uso estrico da ventjas para un codigo mejor organizado como no declarar variables in var


// aqui van las variables

var pais = "España";
console.log(pais)
// al parecer no es necesario llamar con un var
var continente = "Europa";
var antiguedad = 2019;
console.log(continente,antiguedad);
// en este caso muestra al costado los datos de consola

// para concatenar es con el +
var pais_y_contienete= continente+antiguedad+ " hola " + pais + 'como estas';
console.log(pais_y_contienete);
// el resultado es Europa2019 hola Españacomo estas

//sobreescribiendo
pais = "PERU";
continente = "America";
antiguedad = 2020;

pais_y_contienete= continente+antiguedad+ " hola " + pais + 'como estas';
console.log(pais_y_contienete);
// el resultado es America2020 hola PERUcomo estas

// NOTAS : OBSERVAR COMO PARA SOBREESCIBIR VARIABLES NO ES NECESARIO PORNER EL VAR al ponerlo dara error
alert(pais_y_contienete);

let variable= "Esta es una variable con let"
alert(variable);