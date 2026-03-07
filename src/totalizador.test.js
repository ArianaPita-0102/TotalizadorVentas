import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("Deberia mostrar la cantidad ingresada", () => {
    expect(totalizador.mostrarCantidad(5)).toEqual(5);
  });

  it("Deberia mostrar el precio ingresado", () => {
    expect(totalizador.mostrarPrecioItem(10)).toEqual(10);
  });

  it("Deberia mostrar el precio neto", () => {
    expect(totalizador.mostrarPrecioNeto(5, 10)).toEqual(50);
  });

  it("Deberia mostrar el impuesto para el estado UT", () => {
    expect(totalizador.mostrarImpuestoEstado("UT")).toEqual(6.65);
  });

  it("deberia devolver el impuesto para NV", () => {
    expect(totalizador.mostrarImpuestoEstado("NV")).toEqual(8);
  });

  it("deberia devolver el impuesto para TX", () => {
    expect(totalizador.mostrarImpuestoEstado("TX")).toEqual(6.25);
  });

  it("deberia devolver el impuesto para AL", () => {
    expect(totalizador.mostrarImpuestoEstado("AL")).toEqual(4);
  });

  it("deberia devolver el impuesto para CA", () => {
    expect(totalizador.mostrarImpuestoEstado("CA")).toEqual(8.25);
  });

  it("deberia mostrar el precio total con impuesto para CA", () => {
    expect(totalizador.mostrarTotalConImpuesto(5, 10, "CA")).toEqual(54.125);
  });

  it("deberia mostrar el precio total con impuesto para AL", () => {
    expect(totalizador.mostrarTotalConImpuesto(5, 10, "AL")).toEqual(52);
  });

  it("deberia mostrar el precio total con impuesto para NV", () => {
    expect(totalizador.mostrarTotalConImpuesto(5, 10, "NV")).toEqual(54);
  });

  it("deberia mostrar el precio total con impuesto para UT", () => {
    expect(totalizador.mostrarTotalConImpuesto(5, 10, "UT")).toEqual(53.325);
  });

  it ("deberia mostrar el precio total con impuesto para TX", () => {
    expect(totalizador.mostrarTotalConImpuesto(5, 10, "TX")).toEqual(53.125);
  });

  it("no deberia aplicar descuento si el precio neto es menor o igual a 1000", () => {
    expect(totalizador.obtenerPorcentajeDescuento(800)).toEqual(0);
  });

  it("deberia aplicar descuento del 3% si el precio neto es mayor a 1000", () => {
    expect(totalizador.obtenerPorcentajeDescuento(1200)).toEqual(3);
  });

  it("no deberia aplicar descuento del 5% si el precio neto es menor o igual a 3000'", () => {
    expect(totalizador.obtenerPorcentajeDescuento(2500)).toEqual(3);
  });

  it("deberia aplicar descuento del 5% si el precio neto es mayor a 3000", () => {
    expect(totalizador.obtenerPorcentajeDescuento(3500)).toEqual(5);
  });

  it("no deberia aplicar desciento del 7% si el precio es menor o igual a 7000", () => {
    expect(totalizador.obtenerPorcentajeDescuento(5000)).toEqual(5);
  });

  it ("deberia aplicar descuento del 7% si el precio neto es mayor a 7000", () => {
    expect(totalizador.obtenerPorcentajeDescuento(8000)).toEqual(7);
  });

});
