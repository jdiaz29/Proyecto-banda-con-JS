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


/* CICLOS  */

 /* for */

for (i = 0; i < 5; i++) {
let cantidadiscos = parseInt(prompt("Ingrese la cantidad de discos que desea comprar"));

if (cantidadiscos <= 5) {
    alert ( "Gracias por su compra tiene " + cantidadiscos + " discos reservados en su carrito." );
break
}}


let discos = prompt ("Cantidad de discos que desea comprar");

/*while*/

while (discos <=5) {

alert ( "Gracias por su compra tiene " + discos +" discos reservados en su carrito.");

 discos = prompt ("Cantidad de discos que desea comprar");

}





