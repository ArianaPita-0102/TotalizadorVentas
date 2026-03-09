import totalizador from "./totalizador.js";

const boton = document.querySelector("#totalizar");

boton.addEventListener("click", () => {
  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);
  const estado = document.querySelector("#estado").value;
  const categoria = document.querySelector("#categoria").value;
  const peso = Number(document.querySelector("#pesoVolumetrico").value);
  const tipoCliente = document.querySelector("#tipoCliente").value;

  const resultado = totalizador.calcularTotalCompra(cantidad,precio,estado,categoria,peso,tipoCliente);

  const impuesto = totalizador.mostrarImpuestoEstado(estado);
  const porcentajeDescuento = totalizador.obtenerPorcentajeDescuento(resultado.precioNeto);
  document.querySelector("#resultadoNeto").textContent = resultado.precioNeto;
  document.querySelector("#textoImpuesto").textContent = "Impuesto para " + estado + " (%" + impuesto + ")";
  document.querySelector("#textoDescuento").textContent = "Descuento (" + porcentajeDescuento + "%)";

  document.querySelector("#resultadoDescuento").textContent = resultado.descuento;
  document.querySelector("#resultadoImpuesto").textContent = resultado.impuestoEstado;
  document.querySelector("#resultadoTotal").textContent = resultado.totalFinal;

  document.querySelector("#textoImpuestoAdicional").textContent = "Impuesto adicional para " + categoria + " (%" + resultado.impuestoAdicional + ")";
  document.querySelector("#resultadoImpuestoAdicional").textContent = resultado.impuestoCategoria;
  document.querySelector("#textoDescuentoAdicional").textContent = "Descuento adicional para " + categoria + " (%" + resultado.descuentoAdicional + ")";
  document.querySelector("#resultadoDescuentoAdicional").textContent = resultado.descuentoCategoria;
  document.querySelector("#resultadoEnvioUnidad").textContent = resultado.costoEnvioUnidad;
  document.querySelector("#resultadoDescuentoEnvio").textContent = resultado.descuentoEnvio + "%";

  document.querySelector("#resultadoEnvio").textContent = resultado.costoEnvioFinal;

  document.querySelector("#resultadoDescuentoEspecial").textContent = resultado.descuentoEspecial;
});



