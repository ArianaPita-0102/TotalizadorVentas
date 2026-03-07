const totalizador = {
  mostrarCantidad(cantidad) {
    return cantidad;
  },

  mostrarPrecioItem(precio) {
    return precio;
  },

 mostrarPrecioNeto(cantidad, precio) {
    return cantidad * precio;
  },

  mostrarImpuestoEstado(estado) {
    const impuestos = {
      UT: 6.65,
      NV: 8,
      TX: 6.25,
      AL: 4,
      CA: 8.25
    };

    return impuestos[estado];
  },

  mostrarTotalConImpuesto(cantidad, precio, estado) {
    const precioNeto = cantidad * precio;
    const impuesto = totalizador.mostrarImpuestoEstado(estado);
    return precioNeto + (precioNeto * impuesto / 100);
  },


  obtenerPorcentajeDescuento(precioNeto) {
    if (precioNeto >= 3000) {
      return 5;
    }
    if (precioNeto >= 1000) {
      return 3;
    }
    return 0;
  }
}

export default totalizador;