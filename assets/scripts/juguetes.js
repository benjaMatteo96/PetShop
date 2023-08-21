import { crearTarjetas, imprimirCheckbox } from "../modules/funciones.js"

const contenedorCheckBoxes = document.getElementById("contenedor-checkboxes")

const arrayObjetos = [
  { rango: "$0 - $999", 
    valor: 999 },

  { rango: "$1000 - $1999",
   valor: 1999 },

  {
    rango: "$2000 - $2999",
    valor:2999
    
  },

  {
    rango: "$3000",
    valor: 3000
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

    contenedorCheckBoxes.addEventListener("click",filtroPorCheck )
    filtroPorCheck(listaJuguetes)
  })

  const primerCheck=[]
  function filtroPorCheck(lista) {
    const checkedBox= document.querySelectorAll("input[type='checkbox']:checked")
    const arrayCheckedBox = Array.from(checkedBox)
    const filtrarPrecios = lista.filter(objeto => {
      if(objeto.precio <= arrayCheckedBox){
        primerCheck.push(filtrarPrecios)
      }
    })
   
  }