import {crearCheckbox, crearTarjetas, imprimirCheckbox, filtradoPrecio, filtradoPorBusqueda} from "../modules/funciones.js";

const contenedorCards = document.getElementById('contenedorCards');
const buscador = document.getElementById('buscador')
const contenedorCheckbox=document.getElementById('contenedorCheckbox')
const arrayObjetos = [
  { rango: "$0 - $999", 
  valor: 1 
  },

  { rango: "$1000 - $1999",
   valor: 2
  },

  {
    rango: "$2000 - $2999",
    valor: 3
    
  },

  {
    rango: "$3000 o más",
    valor: 4
  }

]
let arrayFarmacia=[]
let storage = JSON.parse(localStorage.getItem('carrito'));
let carrito= storage ? storage: [];


fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(response => response.json())
  .then(array => {
    const arrayGeneral = array;
    arrayFarmacia = arrayGeneral.filter(farmacias => farmacias.categoria === "farmacia");
    crearTarjetas(arrayFarmacia,contenedorCards);
    imprimirCheckbox(contenedorCheckbox, arrayObjetos)


    contenedorCheckbox.addEventListener('change', ()=>{
    
      const busqueda = filtradoPorBusqueda(arrayFarmacia, buscador.value)
      const tarjetas = filtradoPrecio(busqueda)
      if(tarjetas.length===0){
        contenedorCards.innerHTML=``
        contenedorCards.innerHTML+=`<div class="mensajeNoHay"><h4>¡Guau!, No hay nada para mostrar aqui ):</h4> 
        <img class="imagenNoHay"src="../images/llorando.png" alt=""></div>`
      }else{
        contenedorCards.innerHTML = ''
        crearTarjetas(tarjetas, contenedorCards)   
  }
})

  buscador.addEventListener('input', ()=>{
    if (buscador) {
    const busqueda = filtradoPorBusqueda(listaJuguetes, buscador.value)
    const tarjetas = filtradoPrecio(busqueda)
    if(tarjetas.length===0){
      contenedorCards.innerHTML=``
      contenedorCards.innerHTML+=`<div class="mensajeNoHay"><h4>¡Guau!, No hay nada para mostrar aqui ):</h4> 
      <img class="imagenNoHay"src="../images/llorando.png" alt=""></div>`
    }else{
        contenedorCards.innerHTML = ''
        crearTarjetas(tarjetas, contenedorCards)
    }}      
  })

   contenedorCards.addEventListener('click', e=>{
    const idProducto = e.target.dataset.id
    if (idProducto){
      const producto = carrito.find(elementoCarrito=>elementoCarrito._id==idProducto)
     
      if(producto){
        const indiceProducto = carrito.findIndex((productoCarrito)=>productoCarrito._id==idProducto )
        carrito.splice(indiceProducto, 1)
      }else {
        const productos = arrayFarmacia.find((seleccionado => seleccionado._id==idProducto))
        carrito.push(productos)
      }
      
      localStorage.setItem('carrito', JSON.stringify(carrito))
      console.log(carrito)
    }

   }) 
});

