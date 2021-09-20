
/* DOM   */



let redes = document.createElement("redes");


redes.innerHTML = " <h3>CREADOS CON DOM</h3> <li>Facebook</li> <li>Instagram</li> <li>Youtube</li>"; 

document.body.appendChild(redes);


const redesociales = document.getElementsByClassName('.redes');
console.log(redesociales);


redes.addEventListener ('click',()=> console.log ('clicks'));


/* Array de productos */

const products = [
{
 id: 1,
 articulo: 'remera',
 precio:  850, },



{
id: 2,
 articulo: 'buzo',
 precio:  2000, 
},
{
 id: 3,
 articulo: 'disco',
 precio:  150, 
},

]
 

const agregarproductos = (products, precio)=> {
    console.log(products)
}

agregarproductos(products, "precio");








