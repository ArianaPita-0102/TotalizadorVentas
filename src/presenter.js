import totalizador from "./totalizador.js";

const boton = document.querySelector("#totalizar");

boton.addEventListener("click", () => {
  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);

  const precioNeto = totalizador.mostrarPrecioNeto(cantidad, precio);

  document.querySelector("#resultadoNeto").textContent = precioNeto;
});