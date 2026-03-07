import totalizador from "./totalizador.js";

describe("Totalizador", () => {
  it("Deberia mostrar la cantidad ingresada", () => {
    expect(totalizador.mostrarCantidad(5)).toEqual(5);
  });

  it("Deberia mostrar el precio ingresado", () => {
    expect(totalizador.mostrarPrecioItem(10)).toEqual(10);
  });

  it("Deberia mostrar el precio netro", () => {
    expect(totalizador.mostrarPrecioNeto(5, 10)).toEqual(50);
  });
});
