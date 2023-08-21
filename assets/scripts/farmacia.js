import {crearTarjetas, imprimirCheckbox} from "../modules/funciones.js";

const contenedorCards = document.getElementById('contenedorCards');
const buscador = document.getElementById('buscador')
const contenedorCheckbox=document.getElementById('contenedorCheckbox')
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
    rango: "$3000 o más",
    valor: 3000
  }

]


fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(response => response.json())
  .then(array => {
    const arrayGeneral = array;
    const arrayFarmacia = arrayGeneral.filter(farmacias => farmacias.categoria === "farmacia");
    console.log(arrayFarmacia);
    crearTarjetas(arrayFarmacia,contenedorCards);
    imprimirCheckbox(contenedorCheckbox, arrayObjetos)
    contenedorCheckbox.addEventListener('click', filtrarCheckbox)
    filtrarCheckbox(arrayFarmacia)
  });

  function filtrarCheckbox(arrayFarmacia){
    const checkboxSeleccionados = document.querySelectorAll('input[type=checkbox]:checked')
    console.log(checkboxSeleccionados)
    const valoresCheckbox = Array.from(checkboxSeleccionados).map((input)=>input.value)
    console.log(valoresCheckbox)
  }





