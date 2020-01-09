'use strict'
// Hacer un programa que muestre todos los numeros que estan entre los 2 numeros introducidos por el usuario

var numero1=parseInt(prompt("Introdusc el primer numero",0));
var numero2=parseInt(prompt("Introducir el segundo numero",0));

for(var i=numero1;i<numero2;i++){
    console.log(i);
}