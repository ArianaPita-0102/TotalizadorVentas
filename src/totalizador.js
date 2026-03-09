function redondear(valor) {
  return Number(valor.toFixed(2));
}

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
    if (precioNeto >=30000) {
      return 15;
    }

    if (precioNeto >=10000) {
      return 10;
    }

    if (precioNeto >=7000) {
      return 7;
    }
    if (precioNeto >= 3000) {
      return 5;
    }

    if (precioNeto >= 1000) {
      return 3;
    }
    
    
    return 0;
  },

  obtenerImpuestoAdicionalCategoria(categoria) {
    const impuestosAdicionales = {
      Alimentos: 0,
      "Bebidas alcohólicas": 7,
      "Material de escritorio": 0,
      Muebles: 3,
      Electrónicos: 4,
      Vestimenta: 2,
      Varios: 0
    };
    return impuestosAdicionales[categoria];
  },

  obtenerDescuentoAdicionalCategoria(categoria) {
    const descuentosAdicionales = {
      Alimentos: 2,
      "Bebidas alcohólicas": 0,
      "Material de escritorio": 1.5,
      Muebles: 0,
      Electrónicos: 1,
      Vestimenta: 0,
      Varios: 0
      
    };
    return descuentosAdicionales[categoria];
  },

  obtenerCostoEnvioPorUnidad(peso) {
    if (peso <= 10) {
      return 0;
    }
     if (peso <= 20) {
      return 3.5;
    }
    if (peso<=40) {
      return 5;
    }
    if (peso <=80) {
      return 6;
    }
    if (peso <=100) {
      return 6.5;
    }
    if (peso <=200) {
      return 8;
    }
    return 9;
  },

  obtenerCostoEnvioTotal(cantidad, peso) {
    const costoUnidad = totalizador.obtenerCostoEnvioPorUnidad(peso);
    return cantidad * costoUnidad;
  },

  obtenerDescuentoEnvioCliente(tipoCliente) {
    if (tipoCliente === "normal") return 0;
    if (tipoCliente === "recurrente") return 0.5;
    if (tipoCliente === "antiguo recurrente") return 1;
    if (tipoCliente === "especial") return 1.5;
  },

  obtenerCostoEnvioFinal(cantidad, peso, tipoCliente) {
    const costoEnvioTotal = totalizador.obtenerCostoEnvioTotal(cantidad, peso);
    const descuento = totalizador.obtenerDescuentoEnvioCliente(tipoCliente);

    return costoEnvioTotal - (costoEnvioTotal * descuento / 100);
  },

  obtenerDescuentoEspecialCliente(tipoCliente, categoria, precioNeto) {
    if (tipoCliente === "recurrente" && categoria === "Alimentos" && precioNeto > 3000) {
      return 100;
    }

    if (tipoCliente === "especial" && categoria === "Electrónicos" && precioNeto > 7000) {
      return 200;
    }

    return 0;
  },

  calcularMontoImpuesto(precioNeto, estado) {
    const porcentaje = totalizador.mostrarImpuestoEstado(estado);
    return precioNeto * porcentaje / 100;
  },

  calcularMontoDescuento(precioNeto) {
    const porcentaje = totalizador.obtenerPorcentajeDescuento(precioNeto);
    return precioNeto * porcentaje / 100;
  },

  calcularTotalCompra(cantidad, precio, estado, categoria, peso, tipoCliente) {
    const precioNeto = totalizador.mostrarPrecioNeto(cantidad, precio);
    const porcentajeDescuento = totalizador.obtenerPorcentajeDescuento(precioNeto);
    const impuesto = totalizador.mostrarImpuestoEstado(estado);
    const impuestoEstado = totalizador.calcularMontoImpuesto(precioNeto, estado);
    const impuestoAdicional = totalizador.obtenerImpuestoAdicionalCategoria(categoria);
    const impuestoCategoria = precioNeto * impuestoAdicional / 100;
    const descuento = totalizador.calcularMontoDescuento(precioNeto);
    const descuentoAdicional = totalizador.obtenerDescuentoAdicionalCategoria(categoria);
    const descuentoCategoria = precioNeto * descuentoAdicional / 100;
    const descuentoEspecial = totalizador.obtenerDescuentoEspecialCliente(tipoCliente, categoria, precioNeto);
    const costoEnvioUnidad = totalizador.obtenerCostoEnvioPorUnidad(peso);
    const descuentoEnvio = totalizador.obtenerDescuentoEnvioCliente(tipoCliente);
    const costoEnvioFinal = totalizador.obtenerCostoEnvioFinal(cantidad, peso, tipoCliente);
    const totalFinal =
      precioNeto +
      impuestoEstado +
      impuestoCategoria -
      descuento -
      descuentoCategoria -
      descuentoEspecial +
      costoEnvioFinal;

    return {
      precioNeto: redondear(precioNeto),
      impuestoEstado: redondear(impuestoEstado),
      impuestoAdicional,
      impuestoCategoria: redondear(impuestoCategoria),
      descuento: redondear(descuento),
      descuentoAdicional,
      descuentoCategoria: redondear(descuentoCategoria),
      descuentoEspecial: redondear(descuentoEspecial),
      costoEnvioUnidad: redondear(costoEnvioUnidad),
      descuentoEnvio,
      costoEnvioFinal: redondear(costoEnvioFinal),
      totalFinal: redondear(totalFinal)
    };
  }
}

export default totalizador;