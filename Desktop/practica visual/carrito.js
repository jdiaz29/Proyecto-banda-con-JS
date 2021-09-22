const products = [
    {
     id: 1,
     articulo: 'Remera',
     precio:  850, },
    {
    id: 2,
     articulo: 'Buzo',
     precio:  2000, 
    },
    {
     id: 3,
     articulo: 'Disco',
     precio:  150, 
    },
]

let carrito=[];


    //  <article>
    // <h5>Remera Cuartomenguante</h5>
    // <p>Precio:</p>
    // </article>

    const agregaracarrito = (productos, clase) => {
     const botonmain = document.querySelector (clase);
     
     let articuloprecio = '';

     products.forEach(products => {
         articuloprecio += `
         <article>
         <h5>${products.articulo}</h5>
         <p>${products.precio}</p>
         <button class ="btn-comprar" value= ${products.articulo}>Comprar</button>
         </article>
         `;
        });
     botonmain.innerHTML = articuloprecio


    }
    const comprado =(event) => {
        const nombredearticulos = event.target.value;
        const productosguardados = products.find(products=>products.articulo === (nombredearticulos));
    
        carrito.push (productosguardados);
        

        agregaracarritofinal(carrito, '.disco')
    }
    
    window.onload = () =>  {
    
    agregaracarrito (products, '.remera');
      
    const comprarboton  = document.querySelectorAll (".btn-comprar");

    comprarboton.forEach (btn => btn.addEventListener ('click', comprado)
    );

    }


    const agregaracarritofinal = (productos, clase) => {
        const carritofinal = document.querySelector (clase);
        carritofinal.innerHTML = '';

        let articuloprecio = '';
   
        products.forEach(products => {
            articuloprecio += `
            <article>
            <h5>${products.articulo}</h5>
            <p>${products.precio}</p>
            <button class ="btn-delete" onclick="borrardelcarrito('${products.articulo}')">X</button>
            </article>
            `;
           });
        carritofinal.innerHTML = articuloprecio
        }
        const borrardelcarrito = nombredearticulos =>{

            const nuevocarrito = carrito.filter(products => products.articulo !== (nombredearticulos));
            
            carrito = nuevocarrito;
            agregaracarritofinal (carrito, '.disco');
   
       }