

//Eventos con jquery
$(document).ready(()=> {console.log ("el dom está listo");});

const baseDeDatos = [
    {
        id: 1,
        nombre: 'Remera',
        precio: 850,
        imagen: 'remera.jpg'
    },
    {
        id: 2,
        nombre: 'Buzo',
        precio: 2000,
        imagen: 'buzo.jpg'
    },
    {
        id: 3,
        nombre: 'Disco',
        precio:  200,
        imagen: 'disco.jpg'
    },
  
];

let totalSuma = 0;

cargartotal ();
function cargartotal ()
{$("#Total").html (`<hr><h2>Total $ ${totalSuma}</h2>`)
}

($)("body ").prepend (
    `<h1>CARRITO DE COMPRAS</h1>`
)
for (const datos of baseDeDatos) {
$("#elementos").append (`

<div>
    <h4> Producto: ${datos.nombre} </h4>
     <b>$ ${datos.precio} </b>
     <button 
     class="compra btn-danger"
     
     id="btn-${datos.id}"
     value= "${datos.precio}"
     name= "${datos.nombre}">
     Comprar </button>
    </div>`);

$(`#btn-${datos.id}`).on('click', (event) => {
    $("#Total").fadeIn ();
    
    console.log(`Compraste ${datos.nombre}`);
  let elemento = event.target;
  console.log(`Compraste ${elemento.nombre} (${elemento.id})`);
    totalSuma += parseInt (elemento.value);
    cargartotal ();
})
}



// Animaciones, se oculta resultado "total" de la suma de productos.


$("#Total").hide ();

//metodo show cuando se presiona botón comprar, aparece el total y comienza a sumar.

