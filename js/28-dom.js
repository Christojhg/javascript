'use strict'

//DOCUMENT OBJECT MODEL

function cambiaColor(color) {
    caja.style.background=color;
}

//CONSEGUIR ELEMENTOS CON IN ID CONCRETO

// var caja = document.getElementById("Micaja").innerHTML;

// var caja = document.getElementById("Micaja")
var caja=document.querySelector("#Micaja");

caja.innerHTML="texto en las cajas 2020";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";

caja.className="hola hola2";


//CONSEGUIR ELEMENTOS POR SUS ETIQUETAS
var todosLosDivs=document.getElementsByTagName('div');

// var contenido_div2=todosLosDivs[2].textContent;
var contenido_div2 = todosLosDivs[2];
// console.log(todosLosDivs);
contenido_div2.innerHTML="Otro texto para el segundo elemento";

// console.log(contenido_div2);

var seccion=document.querySelector("#miseccion");
var hr=document.createElement("hr");


var valor;
// todosLosDivs.forEach((valor,indice)=>{
for(valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        // document.querySelector("#miseccion").prepend(parrafo);
        seccion.append(parrafo);
    }
}
// });
seccion.append(hr);
//CONSEGUIR ELEMENTOS POR SU CLASE CSS

var divRojos=document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo')
console.log(divsAmarillos[0].style.background="yellow");

// divRojos[1].style.background="red";
var div;
for( div in divRojos){
    if(divRojos[div].className=="rojo"){
        divRojos[div].style.background = "red";
    }
}
// console.log(divRojos);

// console.log(caja);

//QUERY SELECTOR
var id=document.querySelector("#encabezado");
console.log(id);

var claserojo = document.querySelector(".rojo");
console.log(claserojo);

var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);
