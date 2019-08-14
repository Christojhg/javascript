'use strict'

//prueba con var
var numero = 40;
console.log(numero);

if (true) {
	var numero = 50;
	console.log(numero);
}
//notar que el consoles log final imprimio el valor de var dentro del if
console.log(numero);

// prueba con let
var texto = "texto con var";
console.log(texto);

if (true) {
	let texto = "texto con let";
	console.log(texto);
}
// notar que la conola imprimio el valor de var que esta antes del if
console.log(texto);

// let tiene un alcance limitado donde este declaracion o bloque y var esta globalmente