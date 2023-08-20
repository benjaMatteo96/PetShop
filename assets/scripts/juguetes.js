import { crearTarjetas } from "../modules/funciones.js"

const contenedor_juguetes = document.getElementById("contenedor-juguetes")

fetch("https://mindhub-xj03.onrender.com/api/petshop")
.then(response => response.json())
.then(response => {
  const listaPetShop = response
  console.log("listaPetShop:", listaPetShop)
  const precios = listaPetShop.map(elemento => elemento.precio)
  console.log(precios)
 
  const listaJuguetes = listaPetShop.filter(elementos => elementos.categoria === "jugueteria")
  console.log(listaJuguetes)
  crearTarjetas(listaJuguetes,contenedor_juguetes)

})


