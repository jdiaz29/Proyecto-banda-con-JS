var textoingresado = prompt("Ingresá tu nombre:");

var saludo = "Bienvenide a CuartoMenguante " + textoingresado;

alert( saludo); 

/* CONDICIONAL */
var edad = prompt ("¿Cuántos años tenés?");

if (edad >=18) {

    alert ("Puedes ver el contenido");}


else{ (edad <18) 
    alert ("Lo sentimos, no puedes ver este contenido");
}



/* Funcion multiplicar */
let discos = prompt ("Cantidad de discos que desea comprar");
let valordisco = 150;
let resultado = 0;


function calcular(discos,valordisco,operacion) {
  resultado = (discos * valordisco)
           }

calcular(discos,valordisco)
alert ("Son $"+resultado);






















