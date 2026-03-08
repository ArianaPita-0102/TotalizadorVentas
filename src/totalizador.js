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
}
}

export default totalizador;