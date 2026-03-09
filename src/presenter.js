import totalizador from "./totalizador.js";

const boton = document.querySelector("#totalizar");

boton.addEventListener("click", () => {
  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);
  const estado = document.querySelector("#estado").value;
  const categoria = document.querySelector("#categoria").value;
  const peso = Number(document.querySelector("#pesoVolumetrico").value);
  const tipoCliente = document.querySelector("#tipoCliente").value;

  const precioNeto = totalizador.mostrarPrecioNeto(cantidad, precio);
  const impuesto = totalizador.mostrarImpuestoEstado(estado);
  const porcentajeDescuento =  totalizador.obtenerPorcentajeDescuento(precioNeto);
  const impuestoAdicional = totalizador.obtenerImpuestoAdicionalCategoria(categoria);
  //const costoEnvioTotal = totalizador.obtenerCostoEnvioTotal(cantidad, peso);

  const costoEnvioUnidad = totalizador.obtenerCostoEnvioPorUnidad(peso);

  const descuento = (precioNeto * porcentajeDescuento) / 100;
  const descuentoEnvio = totalizador.obtenerDescuentoEnvioCliente(tipoCliente);
  const costoEnvioFinal = totalizador.obtenerCostoEnvioFinal(cantidad, peso, tipoCliente);

  const descuentoEspecial = totalizador.obtenerDescuentoEspecialCliente(tipoCliente, categoria, precioNeto);
  const descuentoAdicional = totalizador.obtenerDescuentoAdicionalCategoria(categoria);

  const impuestoEstado = totalizador.calcularMontoImpuesto(precioNeto, estado);
  const impuestoCategoria = precioNeto * impuestoAdicional / 100;

  const descuentoCategoria = precioNeto * descuentoAdicional / 100;

  const totalFinal = precioNeto + impuestoEstado + impuestoCategoria - descuento - descuentoCategoria - descuentoEspecial + costoEnvioFinal;
  document.querySelector("#resultadoNeto").textContent = precioNeto;
  document.querySelector("#textoImpuesto").textContent = "Impuesto para " + estado + " (%" + impuesto + ")";
  document.querySelector("#textoDescuento").textContent = "Descuento (" + porcentajeDescuento + "%)";

  document.querySelector("#resultadoDescuento").textContent = descuento;
  //document.querySelector("#resultadoImpuesto").textContent = precioNeto * impuesto / 100;
  document.querySelector("#resultadoImpuesto").textContent = impuestoEstado;

  //const totalConImpuesto = precioNeto + (precioNeto * impuesto / 100) - descuento;
  //document.querySelector("#resultadoTotal").textContent = totalConImpuesto;

  document.querySelector("#resultadoTotal").textContent = totalFinal;

  document.querySelector("#textoImpuestoAdicional").textContent = "Impuesto adicional para " + categoria + " (%" + impuestoAdicional + ")";
  document.querySelector("#resultadoImpuestoAdicional").textContent = impuestoCategoria;
  //document.querySelector("#resultadoImpuestoAdicional").textContent = precioNeto * impuestoAdicional / 100;
  document.querySelector("#textoDescuentoAdicional").textContent = "Descuento adicional para " + categoria + " (%" + descuentoAdicional + ")";
  //document.querySelector("#resultadoDescuentoAdicional").textContent = precioNeto * descuentoAdicional / 100;
  document.querySelector("#resultadoDescuentoAdicional").textContent = descuentoCategoria;
  document.querySelector("#resultadoEnvioUnidad").textContent = costoEnvioUnidad;
  document.querySelector("#resultadoDescuentoEnvio").textContent = descuentoEnvio + "%";

  document.querySelector("#resultadoEnvio").textContent = costoEnvioFinal;

  document.querySelector("#resultadoDescuentoEspecial").textContent = descuentoEspecial;
});



