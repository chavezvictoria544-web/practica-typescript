"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();
    const noHaCumplidoAnios = mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento);
    if (noHaCumplidoAnios) {
        edad--;
    }
    return edad;
}
const fechaNacimiento = "2000-05-15";
const edadCalculada = calcularEdad(fechaNacimiento);
console.log(`La persona nacida el ${fechaNacimiento} tiene ${edadCalculada} años.`);
//# sourceMappingURL=app.js.map