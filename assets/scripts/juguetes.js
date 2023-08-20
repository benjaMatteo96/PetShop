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

function crearTarjetas(array){
    array.forEach(elemento => {
    contenedor_juguetes.innerHTML +=   
      `<div class="card" style="width: 18rem;">
      <img src="${elemento.imagen}" class="card-img-top tarjeta-juguetes" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.producto}</h5>
        <p class="card-text">${elemento.descripcion}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
    </div>`
  });

 
}
crearTarjetas(listaJuguetes)
})


