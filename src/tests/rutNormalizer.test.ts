import { rutNormalizer } from '../utils/rutNormalizer';

describe('rutNormalizer', () => {
  it('debe normalizar el RUT completo con separadores y un dígito verificador', () => {
    expect(rutNormalizer('11.222.333-K')).toBe('11222333k');
  });

  it('debe normalizar el RUT con separadores y un dígito verificador separado', () => {
    expect(rutNormalizer('1.222.333', 'K')).toBe('1222333k');
  });

  it('debe normalizar un RUT sin dígito verificador', () => {
    expect(rutNormalizer('11.222.333')).toBe('11222333');
  });
});
