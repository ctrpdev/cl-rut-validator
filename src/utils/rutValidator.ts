/**
 * Esta función acepta un RUT normalizado por rutNormalizer()
 * o con el mismo formato limpio, por ejemplo: 11222333k
 * @param rutNormalized RUT normalizado
 * @returns Retorna true si el RUT es válido y falso si no es válido
 */
export function rutValidator(rutNormalized: string): boolean {
    const rut = rutNormalized.slice(0, rutNormalized.length - 1);
    const dv = rutNormalized.charAt(rutNormalized.length - 1);
    const reRut: RegExp = /^[0-9]{1,8}$/;
    const reDv: RegExp = /^[\dkK]$/;
    const reRepeated: RegExp = /(.)\1{7,}/;

    let rutIsValid: boolean = false;
    let dvIsValid: boolean = false;
    let dvCheck: string;

    reRut.test(rut) ? rutIsValid = true : rutIsValid = false;
    reDv.test(dv) ? dvIsValid = true : dvIsValid = false;

    if (!rutIsValid || !dvIsValid || rut.length < 7 || rut.length > 8 || reRepeated.test(rut)) {
        return false;
    }

    if (rutIsValid && dvIsValid && rut.length > 6 && rut.length < 9) {
        let sum: number = 0;
        let multiplier: number = 2;
        for (let i: number = rut.length - 1; i >= 0; i--) {
            sum += parseInt(rut.charAt(i)) * multiplier;
            multiplier = multiplier === 7 ? 2 : multiplier + 1;
        }
        const rest: number = sum % 11;
        dvCheck = 11 - rest === 11 ? '0' : 11 - rest === 10 ? 'K' : (11 - rest).toString();

        if (dvCheck.toLowerCase() === dv.toLowerCase()) {
            return true;
        }
    }

    return false;
}