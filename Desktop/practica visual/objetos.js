/*OBJETOS * 

let cantidad = prompt ("ingrese la cantidad de remeras")

class Prendas {

    constructor (talle, cantidad,precioxunidad ) {
        this.talle = talle;
        this.precioxunidad = precioxunidad;
        this.cantidad = cantidad;
        this.ganancia = 0;

    }

    comprar (talle) {
     this.cantidad = this.cantidad - talle;
     this.ganancia = this.ganancia + (this.precioxunidad * talle);
    }

    reponerstock (talle) {
    this.cantidad = this.cantidad + talle;
 }

 }

const remeras = new Prendas ("s", 10, 850);
const remeras2 = new Prendas ("m",5, 850);
const remeras3 = new Prendas ("l" , 8 , 850);
// 






 /*  ARRAY   */

 const Ropa = ["camperas","buzos"] ;


 console.log(Ropa); 

let busqueda = Ropa [1];

console.log({busqueda});

/* metodos */ 

console.log (Ropa.length);

Ropa.push ('musculosa');

console.log (Ropa.length);



