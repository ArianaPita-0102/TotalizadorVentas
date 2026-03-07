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

});
