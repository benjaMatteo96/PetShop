import {crearCheckbox, crearTarjetas, imprimirCheckbox} from "../modules/funciones.js";

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
    console.log(arrayFarmacia);
    crearTarjetas(arrayFarmacia,contenedorCards);
    imprimirCheckbox(contenedorCheckbox, arrayObjetos)


    contenedorCheckbox.addEventListener('change', ()=>{
    
      const tarjetas=filtradoPrecio(arrayFarmacia)
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




