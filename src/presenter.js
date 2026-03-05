const boton = document.getElementById("mostrar");

boton.addEventListener("click", () => {
  const cantidad = document.getElementById("cantidad").value;

  document.getElementById("resultado").textContent =
    "Cantidad ingresada: " + cantidad;
});