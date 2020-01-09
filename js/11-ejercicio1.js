'use strict'
// Programa que nos pieda cual es el mayor el menor o si son iguales
var numero1;
var numero1=parseInt(prompt("Introduce el primer numero",0));

var numero2;
var numero2=parseInt(prompt("Introduce el segundo numero",0));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){
    numero1=parseInt(prompt("Introduce el primer numero",0));
    numero2=parseInt(prompt("Introduce el segundo numero",0));
}

if(numero1==numero2){
    console.log("son iguales");
        var suma=numero1+numero2;
        var resta=numero1-numero2;
        var multiplicacion=numero1*numero2;
        var division=numero1/numero2;
        console.log("La suma de los 2 son: "+suma);
        console.log("La resta de los 2 son: "+resta);
        console.log("La multiplicacion de los 2 son: "+multiplicacion);
        console.log("La division de los 2 son: "+division);
}else{
    console.log("No son iguales");
    if(numero1>numero2){
        var suma=numero1+numero2;
        var resta=numero1-numero2;
        var multiplicacion=numero1*numero2;
        var division=numero1/numero2;
        console.log("La suma de los 2 son: "+suma);
        console.log("La resta de los 2 son: "+resta);
        console.log("La multiplicacion de los 2 son: "+multiplicacion);
        console.log("La division de los 2 son: "+division);
    }else{
        var suma=numero1+numero2;
        var resta=numero2-numero1;
        var multiplicacion=numero1*numero2;
        var division=numero2/numero1;
        console.log("La suma de los 2 son: "+suma);
        console.log("La resta de los 2 son: "+resta);
        console.log("La multiplicacion de los 2 son: "+multiplicacion);
        console.log("La division de los 2 son: "+division);
    }
    
}
