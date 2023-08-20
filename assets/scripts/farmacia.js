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

/* function crearTarjetas(array,contenedor) {
  array.forEach(elemento => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.innerHTML = `
      <img src="${elemento.imagen}" class="card-img-top tarjeta-juguetes" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.producto}</h5>
        <p class="card-text">${elemento.descripcion.substring(0, 100)}</p>
        <p class="card-text more" style="display: none;">${elemento.descripcion.substring(100)}</p>
        <p>Precio: $${elemento.precio}</p>
        <a href="#" class="btn-leermas btn btn-primary">Leer más</a>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>
    `;
    contenedor.appendChild(card);

    const botonLeerMas = card.querySelector('.btn-leermas');
    const moreText = card.querySelector('.more');

    botonLeerMas.addEventListener('click', function () {
      moreText.style.display = moreText.style.display === 'none' ? 'block' : 'none';
      botonLeerMas.textContent = moreText.style.display === 'none' ? 'Leer más' : 'Leer menos';
    });
  });
}
 */
