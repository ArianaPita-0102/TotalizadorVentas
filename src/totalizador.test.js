import totalizador from "./totalizador.js";

test("muestra la cantidad ingresada", () => {
  expect(totalizador.mostrarCantidad(5)).toEqual("Cantidad ingresada: 5");
});

test("muestra el precio ingresado", () => {
  expect(totalizador.mostrarPrecioItem(10)).toEqual("Precio por item ingresado: 10");
});

test("muestra el precio neto", () => {
  expect(totalizador.mostrarPrecioNeto(5,10)).toEqual("Precio neto: 50");
});