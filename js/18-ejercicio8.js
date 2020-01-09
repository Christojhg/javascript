'use strict'

//calculadora que pida dos,si metemos uno mal que vuelva a pedir

var numero1=parseInt(prompt("introdusca el primer numero"),0);
while(isNaN(numero1)){
    var numero1=parseInt(prompt("introdusca el primer numero correctamente"),0);
}

var numero2=parseInt(prompt("introdusca el segundo numero"),0);
while(isNaN(numero2)){
    var numero2=parseInt(prompt("introdusca el segundo numero correctamente"),0);
}

var suma=numero1+numero2;
var resta=numero1-numero2;
var multiplicacion=numero1*numero2;
var division=numero1/numero2;

document.write("la suma es :" +suma+"<br>");
document.write("la resta es :" +resta+"<br>");
document.write("la multiplicacion es :" +multiplicacion+"<br>");
document.write("la division es :" +division+"<br>");

// console.log("la suma es :" +suma+"/n");
// console.log("la resta es :" +resta+"</n>");
// console.log("la multiplicacion es :" +multiplicacion+"</n>");
// console.log("la division es :" +division+"</n>");

// alert("la suma es :" +suma+"/n");
// alert("la resta es :" +resta+"</n>");
// alert("la multiplicacion es :" +multiplicacion+"</n>");
// alert("la division es :" +division+"</n>");