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

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(response => response.json())
  .then(array => {
    const arrayGeneral = array;
    const arrayFarmacia = arrayGeneral.filter(farmacias => farmacias.categoria === "farmacia");
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
      }})

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
});