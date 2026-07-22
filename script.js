// Obtener los elementos
const emailInput = document.getElementById("correo");
const phoneInput = document.getElementById("telefono");
const messageText = document.getElementById("consulta");
const submitButton = document.getElementById("submitButton");

// Deshabilitar al cargar la página
phoneInput.disabled = true;
messageText.disabled = true;
submitButton.disabled = true;

// Cuando el correo recibe el foco
emailInput.addEventListener("focus", function () {
  phoneInput.disabled = false;
  messageText.disabled = false;
});

// Cuando el usuario escribe el correo electrónico,
// habilitar el botón de enviar si el campo no está vacío
emailInput.addEventListener("input", function () {
  if (emailInput.value !== "") {
    submitButton.disabled = false;
  }
});
