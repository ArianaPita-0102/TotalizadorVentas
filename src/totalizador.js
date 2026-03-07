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
  }
}

export default totalizador;