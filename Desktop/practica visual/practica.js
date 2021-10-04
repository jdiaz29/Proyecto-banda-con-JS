// jquery

let inicio = $("#menuinicio");


// Agregado a DOM con JQuery

$(document).ready(()=> {console.log ("el dom está listo");});

$("#menuinicio").append ("<li class='menu_li text-center color:'>Recitales</li>");
$("#menuinicio").append ("<li class='menu_li text-center'>instrumentos</li>");
$("#menuinicio").append ("<li class='menu_li text-center'>novedades</li>");

//Eventos con jquery

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

for (const datos of baseDeDatos) {
$("#elementos").append (`
    <div>
     <h4> Producto: ${datos.nombre} </h4>
     <b>$ ${datos.precio} </b>
     <button 
     class="compra"
     
     id="btn-${datos.id}"
     value= "${datos.precio}"
     name= "${datos.nombre}">
     Comprar </button>
    </div>`);

$(`#btn-${datos.id}`).on('click', (event) => {
    console.log(`Compraste ${datos.nombre}`);
  let elemento = event.target;
  console.log(`Compraste ${elemento.nombre} (${elemento.id})`);
    totalSuma += parseInt (elemento.value);
    cargartotal ();
})
}

