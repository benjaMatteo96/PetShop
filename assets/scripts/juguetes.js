const contenedor_juguetes = document.getElementById("contenedor-juguetes")

fetch("https://mindhub-xj03.onrender.com/api/petshop")
.then(response => response.json())
.then(response => {
  const listaPetShop = response
 
  const listaJuguetes = listaPetShop.filter(elementos => elementos.categoria === "jugueteria")
  console.log(listaJuguetes)

function crearTarjetas(array){
    array.forEach(element => {
    contenedor_juguetes.innerHTML =   
      `<div class="card" style="width: 18rem;">
      <img src="${element.imagen}" class="card-img-top tarjeta-juguetes" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
    </div>`
  });

 
}
crearTarjetas(listaJuguetes)
})


