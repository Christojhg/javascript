'use strict'
//Arrays,Arreglos,Matrices

var nombre="Christopher Huaman";
var nombres=["Christopher Huaman","Alexis sanchez","richard watersson",52,true];

var lenguajes= new Array("PHP","JS","GO","JAVA","C");

// console.log(nombres[0]);
// console.log(lenguajes[0]);

// var elemento=parseInt(prompt("Que elemento del array quieres? ",0));

// if (elemento >=nombres.length) {
//     alert("Introduce un numero menos que "+nombres.length);
// }else{
//     alert(nombres[elemento]);
// }

document.write("<h1>Lenguajes de programacion</h1>")

// for(var i=0;i<lenguajes.length;i++){
//     document.write("<li>"+lenguajes[i]+"</li>")
// }

lenguajes.forEach((elemento,indice,arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>");
});

// for(let lenguaje in lenguajes){
//     document.write("<li>"+lenguajes[lenguaje]+"</li>")
// }


document.write("</ul>");