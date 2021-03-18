/**
 * 1. Creamos la fecha de hoy en una variable llamada "fechaActual"
 * invocando el constructor de Date vacío.
 *
 * Mostrar la fecha por consola.
 */

 let fechaActual = new Date();

 /**
  * 2. Creamos una fecha de hace 3 meses
  * en una variable llamada "tres_meses_atras"
  *  pasandole un date string en formato MES/DIA/AÑO
  */
 
 let tres_meses_atras = new Date("11/01/2020");
 let UNIX_tres_meses = tres_meses_atras.getTime();
 console.log(UNIX_tres_meses);
 
 /**
  * 3. Creamos la misma fecha de hace 3 meses pero pasando el tiempo UNIX en milisegundos
  */
 
 let tresmesesUNIX = new Date(1604199600000);
 
 /**
  * 4. Para la fecha "fechaActual", extraemos el año y también, el tiempo UNIX.
  */
 
 // console.log(fechaActual.getFullYear());
 
 /**
  * 5. Calcular la cantidad de dias entre dos fechas
  */
 
 /**
  * 6. Calcular la cantidad de años entre dos fechas con
  * la función getFullYear()
  */
 
 let cumpleCaro = new Date("01/30/1988");
 let fechaActual1 = new Date();
 
 let cumpleCaroAño = cumpleCaro.getFullYear();
 let fechaActual1Año = fechaActual1.getFullYear();
 
 console.log(fechaActual1Año - cumpleCaroAño);
 
 // paso 1 - obtener el tiempo unix de estas dos fechas
 let cumpleCaroUNIX_MS = cumpleCaro.getTime();
 let fechaActualUNIX_MS = fechaActual1.getTime();
 
 // paso 2 - restar las fechas
 let restaFechas = fechaActualUNIX_MS - cumpleCaroUNIX_MS;
 
 // paso 3 - transformar el tiempo en MS UNIX a SEG UNIX
 let restaFechas_SEG = restaFechas / 1000;
 
 // paso 4 - convertir el tiempo UNIX en dias
 let diasDeCaro = restaFechas_SEG / 60 / 60 / 24;
 console.log(diasDeCaro);
 