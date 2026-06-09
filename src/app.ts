function calcularEdad(fechaNacimiento: string): number {
  const nacimiento: Date = new Date(fechaNacimiento);
  const hoy: Date = new Date();

  let edad: number = hoy.getFullYear() - nacimiento.getFullYear();

  const mesActual: number = hoy.getMonth();
  const diaActual: number = hoy.getDate();

  const mesNacimiento: number = nacimiento.getMonth();
  const diaNacimiento: number = nacimiento.getDate();

  const noHaCumplidoAnios: boolean =
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento);

  if (noHaCumplidoAnios) {
    edad--;
  }

  return edad;
}

const fechaNacimiento: string = "2000-05-15";
const edadCalculada: number = calcularEdad(fechaNacimiento);

console.log(`La persona nacida el ${fechaNacimiento} tiene ${edadCalculada} años.`);