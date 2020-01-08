'use strict'

//que nos diga si un numero es par o impar
// 1. ventana prompt
// 2. si no es valido que nos pida de nuevo

var numero=parseInt(prompt("Introdusca el numero",0));

while(isNaN(numero)){
    numero=parseInt(prompt("Introdusca el numero",0));
}

if(numero %2 ==0){
    alert("es numero par");
}else{
    alert("es impar");
}