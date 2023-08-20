const contenedorCards = document.getElementById('contenedorCards')


fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then(response=>response.json())
.then(array=>{
    const arrayGeneral = array;
    const arrayFarmacia = arrayGeneral.filter(farmacias=>farmacias.categoria==="farmacia")
    console.log(arrayFarmacia)
    crearTarjetas(arrayFarmacia)
    
})

function crearTarjetas(array){
  array.forEach(elemento => {
  contenedorCards.innerHTML +=   
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