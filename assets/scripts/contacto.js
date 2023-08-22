document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeExito = document.getElementById("mensajeExito");
  
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const apellido= document.getElementById("apellido").value
      const telefono = document.getElementById("telefono").value;
      const textArea = document.getElementById("exampleFormControlTextarea1").value

  
      console.log("Nombre:", nombre);
      console.log("Apellido: ", apellido)
      console.log("Teléfono: ", telefono)
      console.log("textArea: ", textArea)
      
      mensajeExito.style.display = "block";
      
  
      formulario.reset();
    });
  });