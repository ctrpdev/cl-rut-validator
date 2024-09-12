import { rutValidator } from '../utils/rutValidator';

describe('rutValidator', () => {
  it('debe validar un RUT correcto con dígito verificador numérico', () => {
    expect(rutValidator('198763233')).toBe(true);
  });

  it('debe validar un RUT correcto con dígito verificador k', () => {
    expect(rutValidator('9499506k')).toBe(true);
  });

  it('debe invalidar un RUT incorrecto', () => {
    expect(rutValidator('11222333j')).toBe(false);
  });

  it('debe invalidar un RUT con formato incorrecto', () => {
    expect(rutValidator('11222333')).toBe(false);
  });
});
