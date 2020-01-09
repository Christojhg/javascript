'use strict'

//muestre los numero divisores del numero dado en promp

var numero=parseInt(prompt("Introdusca el numero ",1));

for(var i=1;i<numero;i++){
    if(numero%i == 0){
        console.log("Divisor: "+i);
    }
}