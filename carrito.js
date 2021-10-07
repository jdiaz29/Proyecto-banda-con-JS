
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

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

function renderizarProductos() {
    baseDeDatos.forEach((info) => {
      
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
       
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
    
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
      
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info.precio + '$';
       
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-danger');
        miNodoBoton.textContent = 'Comprar';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
     
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}


 /* Evento para añadir un producto al carrito de la compra */

function anyadirProductoAlCarrito(evento) {
    // se agrega nodo al carrito*/
    carrito.push(evento.target.getAttribute('marcador'))
    // total*/
    calcularTotal();
    // Actualizamos el carrito */
    renderizarCarrito();

}


function renderizarCarrito() {
    // Vaciamos el html
    DOMcarrito.textContent = '';
    // Se quitan duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generacion de  Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          
            return itemBaseDatos.id === parseInt(item);
        });
        //  número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
           
            return itemId === item ? total += 1 : total;
        }, 0);
        // se crea el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // se obtiene producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borra todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // renderizar nuevamente
    renderizarCarrito();
    // Calcula de nuevo el precio
    calcularTotal();
}


 // Calcula el precio total teniendo en cuenta los productos repetidos
 
function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // se recorre el array del carrito
    carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    // se limpian los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();

