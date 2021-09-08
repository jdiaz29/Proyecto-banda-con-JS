/*OBJETOS */
class prendas {

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

const remeras = new prendas ("s", 10, 850);
const remeras2 = new prendas ("m",5, 850);
const remeras3 = new prendas ("l" , 8 , 850);






