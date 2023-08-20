import {crearTarjetas} from "../modules/funciones.js";

const contenedorCards = document.getElementById('contenedorCards');

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(response => response.json())
  .then(array => {
    const arrayGeneral = array;
    const arrayFarmacia = arrayGeneral.filter(farmacias => farmacias.categoria === "farmacia");
    console.log(arrayFarmacia);
    crearTarjetas(arrayFarmacia,contenedorCards);
  });
