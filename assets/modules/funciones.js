export function crearTarjetas(array,contenedor) {
  array.forEach(elemento => {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.innerHTML = `
      <img src="${elemento.imagen}" class="card-img tarjeta-juguetes" alt="...">
      <div class="card-body">
        <h5 class="card-title">${elemento.producto}</h5>
        <p class="card-text">${elemento.descripcion.substring(0, 100)}</p>
        <p class="card-text more" style="display: none;">${elemento.descripcion.substring(100)}</p>
        <p>Precio: $${elemento.precio}</p>
        <p class="unidades">Unidades disponibles: ${elemento.disponibles}</p>
        <p class="stock-message">${elemento.disponibles <=5 && elemento.disponibles>0 ? `<img src="https://www.aguahorro.com/wp-content/uploads/2017/02/Sin-t%C3%ADtulo-1.png" class="card-img tarjeta-juguetes" alt="..." style="width:5rem; height: 5rem; text-align:center">` : (elemento.disponibles === 0 ? '<img src="https://static.wixstatic.com/media/814325_9b4ab790eb4b43fa8661495a8925f7f7~mv2.png/v1/fill/w_340,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sin-stock.png" class="card-img tarjeta-juguetes" alt="..." style="width:5rem; height: 5rem; text-align:center">' : '')}</p>
        <a href="#" class="btn-leermas btn btn-primary">Leer más</a>
        <a href="#" class="btn btn-primary">Comprar</a>
      </div>`;

    contenedor.appendChild(card);

    const botonLeerMas = card.querySelector('.btn-leermas');
    const moreText = card.querySelector('.more');

    botonLeerMas.addEventListener('click', function () {
      moreText.style.display = moreText.style.display === 'none' ? 'block' : 'none';
      botonLeerMas.textContent = moreText.style.display === 'none' ? 'Leer más' : 'Leer menos';
    });
  });
}

export function filtradoPrecio(array) {
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

export function filtradoPorBusqueda(arrayFarmacia){
  const filtrado = arrayFarmacia.filter((evento)=>(evento.producto.toLowerCase().replaceAll(" ","")).includes(buscador.value.toLowerCase().replaceAll(" ",""))||(evento.descripcion.toLowerCase().replaceAll(" ","")).includes(buscador.value.toLowerCase().replaceAll(" ","")))
    return filtrado
}

export function crearCheckbox(array){
  return `<div class="checkbox"><input type="checkbox" name="" id="${array.valor}" value="${array.valor}">
  <label for="${array.valor}">${array.rango}</label></div>`
}

export function imprimirCheckbox(contenedor, array){
  for (const categoria of array){
    const checkCreado = crearCheckbox(categoria)
    contenedor.innerHTML += checkCreado
  }
}