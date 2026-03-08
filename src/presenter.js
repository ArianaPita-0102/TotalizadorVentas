import totalizador from "./totalizador.js";

const boton = document.querySelector("#totalizar");

boton.addEventListener("click", () => {
  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);
  const estado = document.querySelector("#estado").value;
  const categoria = document.querySelector("#categoria").value;
  const peso = Number(document.querySelector("#pesoVolumetrico").value);

  const precioNeto = totalizador.mostrarPrecioNeto(cantidad, precio);
  const impuesto = totalizador.mostrarImpuestoEstado(estado);
  const porcentajeDescuento =  totalizador.obtenerPorcentajeDescuento(precioNeto);
  const impuestoAdicional = totalizador.obtenerImpuestoAdicionalCategoria(categoria);
  const costoEnvioTotal = totalizador.obtenerCostoEnvioTotal(cantidad, peso);

  const costoEnvioUnidad = totalizador.obtenerCostoEnvioPorUnidad(peso);

  const descuento = (precioNeto * porcentajeDescuento) / 100;

  document.querySelector("#resultadoNeto").textContent = precioNeto;
  document.querySelector("#textoImpuesto").textContent = "Impuesto para " + estado + " (%" + impuesto + ")";
  document.querySelector("#textoDescuento").textContent = "Descuento (" + porcentajeDescuento + "%)";

  document.querySelector("#resultadoDescuento").textContent = descuento;
  document.querySelector("#resultadoImpuesto").textContent = precioNeto * impuesto / 100;

  const totalConImpuesto = precioNeto + (precioNeto * impuesto / 100) - descuento;
  document.querySelector("#resultadoTotal").textContent = totalConImpuesto;

  document.querySelector("#textoImpuestoAdicional").textContent = "Impuesto adicional para " + categoria + " (%" + impuestoAdicional + ")";
  document.querySelector("#resultadoImpuestoAdicional").textContent = precioNeto * impuestoAdicional / 100;

  const descuentoAdicional = totalizador.obtenerDescuentoAdicionalCategoria(categoria);
  document.querySelector("#textoDescuentoAdicional").textContent = "Descuento adicional para " + categoria + " (%" + descuentoAdicional + ")";
  document.querySelector("#resultadoDescuentoAdicional").textContent = precioNeto * descuentoAdicional / 100;
  document.querySelector("#resultadoEnvioUnidad").textContent = costoEnvioUnidad;

  document.querySelector("#resultadoEnvio").textContent = costoEnvioTotal;
});



