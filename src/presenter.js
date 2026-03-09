import totalizador from "./totalizador.js";

const boton = document.querySelector("#totalizar");
const formatearMoneda = (valor) => "$ " + valor;

boton.addEventListener("click", () => {
  // Obtener datos del formulario
  const cantidad = Number(document.querySelector("#cantidad").value);
  const precio = Number(document.querySelector("#precio").value);
  const estado = document.querySelector("#estado").value;
  const categoria = document.querySelector("#categoria").value;
  const peso = Number(document.querySelector("#pesoVolumetrico").value);
  const tipoCliente = document.querySelector("#tipoCliente").value;

  // Calcular resultado
  const resultado = totalizador.calcularTotalCompra(cantidad, precio, estado, categoria, peso, tipoCliente);
 
  // Mostrar resultados
  document.querySelector("#resultadoNeto").textContent = formatearMoneda(resultado.precioNeto);
  document.querySelector("#textoDescuento").textContent = "Descuento (" + resultado.porcentajeDescuento + "%)";
  document.querySelector("#resultadoDescuento").textContent = formatearMoneda(resultado.descuento);
  document.querySelector("#textoImpuesto").textContent = "Impuesto para " + estado + " (%" + resultado.impuesto + ")";
  document.querySelector("#resultadoImpuesto").textContent = formatearMoneda(resultado.impuestoEstado);
  document.querySelector("#textoImpuestoAdicional").textContent = "Impuesto adicional para " + categoria + " (%" + resultado.impuestoAdicional + ")";
  document.querySelector("#resultadoImpuestoAdicional").textContent = formatearMoneda(resultado.impuestoCategoria);
  document.querySelector("#textoDescuentoAdicional").textContent = "Descuento adicional para " + categoria + " (%" + resultado.descuentoAdicional + ")";
  document.querySelector("#resultadoDescuentoAdicional").textContent = formatearMoneda(resultado.descuentoCategoria);
  document.querySelector("#resultadoEnvioUnidad").textContent = formatearMoneda(resultado.costoEnvioUnidad);
  document.querySelector("#resultadoDescuentoEnvio").textContent = resultado.descuentoEnvio + "%";
  document.querySelector("#resultadoEnvio").textContent = formatearMoneda(resultado.costoEnvioFinal);
  document.querySelector("#resultadoDescuentoEspecial").textContent = formatearMoneda(resultado.descuentoEspecial);
  document.querySelector("#resultadoTotal").textContent = formatearMoneda(resultado.totalFinal);
});