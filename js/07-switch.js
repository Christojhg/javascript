'use strict'

var edad=13;
var imprime="";

switch(edad){
	case 18:
		imprime = "acabas de cumplir 18 años";
		break
	case 235:
		imprime="eres superviejo ";
		break
	case 12:
		imprime="tienes una doscena";
		break
	default:
		imprime="ola";
	break;
};

console.log(imprime);