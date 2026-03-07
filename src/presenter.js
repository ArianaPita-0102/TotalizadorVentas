import totalizador from "./totalizador.js";

const boton = document.querySelector("#totalizar");

boton.addEventListener("click", () => {
  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);
  const estado = document.querySelector("#estado").value;

  const precioNeto = totalizador.mostrarPrecioNeto(cantidad, precio);
  const impuesto = totalizador.mostrarImpuestoEstado(estado);
  const porcentajeDescuento =  totalizador.obtenerPorcentajeDescuento(precioNeto);

  const descuento = (precioNeto * porcentajeDescuento) / 100;

  document.querySelector("#resultadoNeto").textContent = precioNeto;
  document.querySelector("#textoImpuesto").textContent = "Impuesto para " + estado + " (%" + impuesto + ")";
  document.querySelector("#textoDescuento").textContent = "Descuento (" + porcentajeDescuento + "%)";

  document.querySelector("#resultadoDescuento").textContent = descuento;
  document.querySelector("#resultadoImpuesto").textContent = precioNeto * impuesto / 100;

  const totalConImpuesto = precioNeto + (precioNeto * impuesto / 100) - descuento;
  document.querySelector("#resultadoTotal").textContent = totalConImpuesto;
});



