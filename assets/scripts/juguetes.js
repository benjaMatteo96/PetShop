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
      <img src="${elemento.imagen}" class="card-img" alt="...">
      <div class="card-body">
        <h4 class="card-title">${elemento.producto}</h4>
        <div class ="d-flex  justify-content-around">
          <p>Precio: ${elemento.precio}</p>
          <p>Stock: ${elemento.disponibles}</p>
        </div>
        
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
        <a href="#" class="btn btn-primary">Detalles</a>
      </div>
    </div>`
  });

 
}
crearTarjetas(listaJuguetes)
})


