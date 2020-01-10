'use strict'

//FUNCIONES

// function calculadora() {
//     return "Hola soy la calculadora";
// }

// console.log(calculadora());
function PorConsola(numero1, numero2) {
    console.log("suma " + (numero1 + numero2));
    console.log("resta " + (numero1 - numero2));
    console.log("multiplicacion " + (numero1 * numero2));
    console.log("division " + (numero1 / numero2));
}

function PorPantalla(numero1, numero2) {
    document.write("suma " + (numero1 + numero2 + "<br/>"));
    document.write("resta " + (numero1 - numero2 + "<br/>"));
    document.write("multiplicacion " + (numero1 * numero2 + "<br/>"));
    document.write("division " + (numero1 / numero2 + "<br/>"));
}


function calculadora(numero1,numero2,mostrar=false) {
    if(mostrar==false){
        PorConsola(numero1,numero2);
    }else{
        PorPantalla(numero1,numero2);
    }

    return "exitoso";
}

calculadora(5,1);
calculadora(6,2,true);

