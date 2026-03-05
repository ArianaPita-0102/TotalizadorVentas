const totalizador = {
  mostrarCantidad(cantidad) {
    return "Cantidad ingresada: " + cantidad;
  },

  mostrarPrecioItem(precio) {
    return "Precio por item ingresado: " + precio;
  },

  mostrarPrecioNeto(cantidad, precio ) {
    return "Precio neto: " + cantidad * precio;
  }
}

export default totalizador;