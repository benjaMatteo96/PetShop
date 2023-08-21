import {crearTarjetas, imprimirCheckbox} from "../modules/funciones.js";

const contenedorCards = document.getElementById('contenedorCards');
const buscador = document.getElementById('buscador')
const contenedorCheckbox=document.getElementById('contenedorCheckbox')
const arrayRangoPrecios = ["$0 - $999", "$1000 - $1999", "$2000 - $2999", "$3000 O más"]

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(response => response.json())
  .then(array => {
    const arrayGeneral = array;
    const arrayFarmacia = arrayGeneral.filter(farmacias => farmacias.categoria === "farmacia");
    console.log(arrayFarmacia);
    crearTarjetas(arrayFarmacia,contenedorCards);
    imprimirCheckbox(contenedorCheckbox, arrayRangoPrecios)
  });





