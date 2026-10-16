const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo) {
  mensaje.innerHTML = "";                       
  const alerta = document.createElement("div"); 
  alerta.className = "alert alert-" + tipo;     
  alerta.setAttribute("role", "alert");        
  alerta.textContent = texto;                   
  mensaje.appendChild(alerta);                  
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const programa = document.getElementById("programa").value;
  const modalidad = document.querySelector('input[name="modalidad"]:checked').value;
  const terminos = document.getElementById("terminos").checked;

  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patronTelefono = /^9\d{8}$/;

  if (nombre === "" || correo === "" || telefono === "" || programa === "") {
    mostrarMensaje("Completa todos los campos.", "danger");
  } else if (!patronCorreo.test(correo)) {
    mostrarMensaje("Ingresa un correo válido.", "danger");
  } else if (!patronTelefono.test(telefono)) {
    mostrarMensaje("El teléfono debe tener 9 dígitos y empezar con 9.", "danger");
  } else if (!terminos) {
    mostrarMensaje("Debes aceptar los términos y condiciones.", "danger");
  } else {
    
    mostrarMensaje(
      "¡Registro enviado con éxito, " + nombre + "! Programa: " + programa + " (" + modalidad + ").",
      "success"
    );
    formulario.reset();
  }
});