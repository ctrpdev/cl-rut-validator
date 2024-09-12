/**
 * Esta función acepta un RUT como string, ya sea 
 * el rut completo o separado por dígito verificador
 * y retorna un string limpio
 * @param rut RUT completo o sin dígito verificador: 11.222.333-k o 11222333
 * @param dv Dígito verificador: k
 */
export function rutNormalizer(rut: string, dv?: string): string {
    if (typeof dv === 'undefined') {
        return rut.replace(/[^\dkK\d]/g, '').toLocaleLowerCase();
    } else {
        return (rut + dv).replace(/[^\dkK\d]/g, '').toLowerCase();
    }
}