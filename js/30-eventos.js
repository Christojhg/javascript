'use strict'

//EVENTOS DEL RATON
var boton=document.querySelector("#boton");

function cambiarColor(){
    console.log("me has dado click");
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
        boton.style.padding="10px";
        boton.style.border="1px solid #ccc"
    }else{
        boton.style.background="green";
    }
    return true;
}