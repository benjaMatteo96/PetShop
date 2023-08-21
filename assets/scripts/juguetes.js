import { crearTarjetas, imprimirCheckbox } from "../modules/funciones.js"

const contenedorCheckBoxes = document.getElementById("contenedor-checkboxes")

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

const listaRangos= arrayObjetos.map(elemento => elemento.rango)

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
    
      const tarjetas=filtradoPrecio(listaJuguetes)
      console.log(tarjetas);

  })});

  function filtradoPrecio(array) {
    const checkboxSeleccionados = document.querySelectorAll('input[type=checkbox]:checked')
      const valoresCheckbox = Array.from(checkboxSeleccionados).map((checkbox)=>checkbox.value)
      if (valoresCheckbox.length===0) {
        return array
      }

      const tarjetasFiltradas=[]
      if (valoresCheckbox.includes(`1`)) {
        let a=array.filter((e)=>e.precio<999)
        tarjetasFiltradas.push(...a)
      }
      if(valoresCheckbox.includes(`2`)){
        let a=array.filter((e)=>e.precio>=1000 && e.precio<=1999)
        tarjetasFiltradas.push(...a)
      }
      if(valoresCheckbox.includes(`3`)){
        let a=array.filter((e)=>e.precio>=2000 && e.precio<=2999)
        tarjetasFiltradas.push(...a)
      }
      if(valoresCheckbox.includes(`4`)){
        let a=array.filter((e)=>e.precio>=3000)
        tarjetasFiltradas.push(...a)  
      }
      
      
    return tarjetasFiltradas
  }
  