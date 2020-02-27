'use strict'

var categorias=['Accion','terror','comedia'];

var peliculas=['La verdad duele','La vida es bella','Gran torino'];

var cine=[categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

peliculas.push("Batman");
console.log(peliculas);

//POP ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
peliculas.pop();
console.log(peliculas);

peliculas[0]=undefined;
console.log(peliculas);

peliculas[0] = "La verdad Duele";
console.log(peliculas);

//BUSCAR Y ELIMINAR
var indice=peliculas.indexOf('La vida es bella');
if(indice > -1){
    peliculas.splice(indice,1);
}

console.log(peliculas);

//Convertir array a texto
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//convertir de string a array
var cadena="texto16 ,texto12 ,texto3";
var cadena_array=cadena.split(" ,");

console.log(cadena_array);

//ordenar array
cadena_array.sort();
console.log(cadena_array);

//Busquedas
// var busquedas=cadena_array.find(function(lenguaje){
//     return lenguaje =="tesxto16";
// });

var busquedas = cadena_array.find(lenguaje => lenguaje == "texto16");


console.log(busquedas);