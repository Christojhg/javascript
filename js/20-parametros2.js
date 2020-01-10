'use strict'
//Parametros REST Y SPREAD
//con (3 puntos en los parametros junto ;recoge un array ) ...

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(resto_de_frutas);
}

// listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

var frutas=["naranja","Mandarina"]

listadoFrutas(...frutas, "Manzana", "Sandia", "Pera", "Melon", "Coco");