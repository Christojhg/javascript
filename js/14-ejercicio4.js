'use strict'

// Mostrar todos los numeros impares entre los 2 numeros introducidos por el usuario

var numero1=parseInt(prompt("Introducir primer numero",0));
var numero2=parseInt(prompt("Introduce el segundo numero",0));

while(numero1 < numero2){
    numero1++;
    if(numero1%2 !=0){
        console.log("El "+numero1+" es impar");
    }
}
