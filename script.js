// Sistema de Inscripción Escolar — lógica del lado del cliente
//
// TODO (rama feature-validacion): completar la validación del formulario
// de contacto antes de que el "envío" se considere exitoso.

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // TODO (rama feature-validacion): agregar aquí las reglas de validación,
  // por ejemplo: que ningún campo esté vacío, y que el correo tenga un
  // formato razonable (contenga "@" y ".").

  alert("Formulario recibido (validación pendiente de implementar).");
});
