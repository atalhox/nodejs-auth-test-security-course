import { somaHorasExtras, calculaDescontos, multiplicaDepoisDobra } from '../index.js';

/**
 * Test for the function somaHorasExtras.
 */
test('Deve somar horas extras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  expect(retornado).toBe(esperado);
});

/**
 * Test for the function calculaDescontos.
 */
test('Deve retornar o valor de descontos', () => {
  const esperado = 1000;
  const retornado = calculaDescontos(2000, 1000);

  expect(retornado).toBe(esperado);
});

/**
 * Test for the function multiplicaDepoisDobra.
 */
test('Deve multiplicar dois valores entre si e depois retornar o dobro desse resultado ', () => {
  const esperado = 60;
  const retornado = multiplicaDepoisDobra(10, 3);

  expect(retornado).toBe(esperado);
});
