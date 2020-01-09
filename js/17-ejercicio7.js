'use strict'

//tabla de multiplicar de un numero introducido

var numero=parseInt(prompt("Introduca el numero",0));

while(isNaN(numero)){
    var numero=parseInt(prompt("Introduca el numero",0));
}

for(var i=1;i <=12; i++){
    document.write(i + " x "+numero+" = "+(i*numero) +"<br>");
}

//TODAS LAS TABLAS DE MULTIPLICAR

for(var c=1;c <=12; c++){
    document.write("<h1>Tabla del "+c+"</h1>");
    for(var d=1;d <=12; d++){
        document.write(c + " x "+d+" = "+(c*d) +"<br>");
    }
}
