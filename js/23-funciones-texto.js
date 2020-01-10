'use strict'

//Transformacion de texto
var numero=444;
var texto1="    Bienvenidos al curso de javascript curso";
var texto2="es muy buen curso";

// var dato=numero.toString();
// dato=texto1.toUpperCase();//PARA CONVERTIR TODO EN MAYUSCULA
// dato=texto1.toLowerCase();//PARA CONVERTIR TODO EN MINUSCULA
// console.log(typeof dato);

// //CALCULAR LONGITUD
// var nombre="Christopher Huaman";
// console.log(nombre.length);

// //concatenar
// // var textoTotal=texto1+" "+texto2;
// var textoTotal=texto1.concat(" "+texto2);
// console.log(textoTotal);

//Metodos de busqueda

// var busqueda=texto1.indexOf("curso");
// var busqueda=texto1.search("curso");
// var busqueda=texto1.match("curso");
// var busqueda=texto1.match(/curso/g);

// var busqueda=texto1.substr(14,6);
// // var busqueda=texto1.lastIndexOf("curso");
// // var busqueda=texto1.lastIndexOf("curso");
// console.log(busqueda);

//FUNCIONES DE REEMPLAZO
// var busqueda=texto1.replace("javascript","PHP");
// var busqueda=texto1.slice(14);
// var busqueda=texto1.slice(14,22);
// var busqueda=texto1.split(" ");
var busqueda=texto1.trim();
console.log(busqueda);