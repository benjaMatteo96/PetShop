import { crearTarjetas, imprimirCheckbox, filtradoPrecio, filtradoPorBusqueda} from "../modules/funciones.js"

const contenedorCheckBoxes = document.getElementById("contenedor-checkboxes")

const btnComprar = document.getElementById("btn-comprar")


const arrayObjetos = [
  { rango: "$0 - $999", 
    valor: 1 },

  { rango: "$1000 - $1999",
   valor: 2 },

  {
    rango: "$2000 - $2999",
    valor:3 
    
  },

  {
    rango: "$3000",
    valor: 4
  }

]

// const listaRangos= arrayObjetos.map(elemento => elemento.rango)

fetch("https://mindhub-xj03.onrender.com/api/petshop")
  .then(response => response.json())
  .then(response => {
    const listaPetShop = response
    console.log("Lista PetShop:", listaPetShop)
  
    const listaJuguetes = listaPetShop.filter(elementos => elementos.categoria === "jugueteria")
    console.log("Lista Jugueteria",listaJuguetes)

    crearTarjetas(listaJuguetes, contenedorCards)

    imprimirCheckbox(contenedorCheckBoxes, arrayObjetos)

    contenedorCheckBoxes.addEventListener('change', ()=>{
    
      const busqueda = filtradoPorBusqueda(listaJuguetes, buscador.value)
      const tarjetas = filtradoPrecio(busqueda)

      if(tarjetas.length===0){
        contenedorCards.innerHTML=``
        contenedorCards.innerHTML+=` <div class="mensajeNoHay"><h4>¡Guau!, No hay nada para mostrar aqui ):</h4> 
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
    }
}

})

btnComprar.addEventListener("click", console.log("hola"))

});

  
  
  
  