import totalizador from "./totalizador.js";

const boton = document.getElementById("mostrar");
const botonprecio = document.getElementById("mostrarprecio");

boton.addEventListener("click", () => {
  const cantidad = Number.parseInt(document.getElementById("cantidad").value);

  document.getElementById("resultado").textContent =
    totalizador.mostrarCantidad(cantidad);
});

botonprecio.addEventListener("click", () => {
  const precio = Number.parseFloat(document.getElementById("precio").value);

  document.getElementById("resultadoprecio").textContent =
    totalizador.mostrarPrecioItem(precio);
});