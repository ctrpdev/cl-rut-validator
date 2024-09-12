# @ctrpdev/cl-rut-validator

## ¿Por qué otra librería que valida el RUT?
He utilizado algunas librerías para validar el RUT chileno, pero suelo tener el problema de que se validan valores incompletos o erróneos como: 167-8 o 111111111.

cl-rut-validator permite limpiar un RUT, por ejemplo: 11.222.333-K -> 11222333k. El RUT puede ser un único string o estar dividido en un string para la sección numérica y un string para el dígito verificador.

### 1 - Instala la librería
```bash
npm i @ctrpdev/cl-rut-validator
```
### 2 - Importa lo necesario
```js
import { rutNormalizer, rutValidator } from "@ctrpdev/cl-rut-validator";
```
### Ejemplo con un único string
Puedes crear tu propia función de validación:
```js
validarRut() {
  const rut = rutNormalizer(this.form.value.rutCompleto!);
  if (rutValidator(rut)) {
    console.log('El RUT es válido');
  } else {
    console.log('El RUT no es válido');
  }
}
```
### Ejemplo con sección numérica y dígito verificador en diferentes strings
```js
validarRut() {
  const rutSeccionNumerica = this.form.value.rut!;
  const rutDv = this.form.value.dv!;
  if (rutValidator(rutNormalizer(rutSeccionNumerica, rutDv))) {
    console.log('El RUT es válido');
  } else {
    console.log('El RUT no es válido');
  }
}
```
