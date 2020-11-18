// 😀 EJERCICIO 1
// Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 5).
// Guardar en variables el valor del primero, tercero y sexto elemento del array.
// Mostrar por consola los siguientes 3 mensajes: La banda en primer lugar es: [NOMBRE_DE_LA_PRIMERA_BANDA] La banda en tercer lugar es: [NOMBRE_DE_LA_TERCERA_BANDA] La banda en sexto lugar es: [NOMBRE_DE_LA_QUINTA_BANDA]

const bandas = ["Metallica", "Pink Floyd", "Linkin Park", "REM", "Pink"];

const bandaPrimero = bandas[0];
console.log("La banda en primer lugar es:", bandaPrimero);

const bandaTercero = bandas[2];
console.log("La banda en tercer lugar es:", bandaTercero);

const bandaSexto = bandas[5];
console.log("La banda en sexto lugar es:", bandaSexto);

// mostrar en un solo mensaje =>
console.log(
  `La banda en primer lugar es: ${bandaPrimero}. La banda en tercero lugar es: ${bandaTercero}. La banda en sexto lugar es: ${bandaSexto}`
);

// 😀 EJERCICIO 2
//Crear un array con el nombre notas y asignarle 10 valores numéricos de 1 a 10.
// Hacer una funcion sumarNotas() que reciba el array como argumento y retorne la suma de todas.
// Hacer una funcion calcularPromedio() que reciba el array como argumento y retorne el promedio de notas (podes utilizar sumarNotas() para reutilizar codigo).

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(notas.length);

const sumarNotas = () => {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma;
};
console.log(sumarNotas());

const calcularPromedio = () => {
  let promedio = 0;
  promedio = sumarNotas() / notas.length;
  return promedio;
};
console.log(calcularPromedio());

// 😀 EJERCICIO 3
// Declarar el array playlist
// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// Recorrer la lista de canciones con un ciclo for y mostrarlas en consola
// De inicio a fin
// De fin a inicio

const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];

console.log("😀 ARRAY CON LOS ELEMENTOS DE INICIO A FIN =>"); // me muestra la lista del array como esta
for (let i = 0; i < playlist.length; i++) {
  console.log(playlist[i]);
}
console.log("😀 ARRAY CON LOS ELEMENTOS DE FIN A INICIO =>");
for (let i = playlist.length - 1; i >= 0; i--) {
  console.log(playlist[i]);
}

// 😀 EJERCICIO 4
// Crear una funcion obtenerNumeroAlAzar() que retorne un numero del 0 al 5 al azar.
// Declarar el array items con los siguientes valores: '🍉', '🍐', '🍌', '🍇', '🍎', '🍊'
// Crear la funcion obtenerFrutaAlAzar() que reciba como argumento items y retorne una fruta del array, usando la funcion obtenerNumeroAlAzar.

// const obtenerNumeroAlAzar2 = () => {
//   // declaracion de funcion
//   console.log(Math.floor(Math.random() * 5 + 1)); // => con Math.floor(Math.random()) obtengo un numero entero entre 1 y 5 al azar
// };
// obtenerNumeroAlAzar2(); // llamado de la funcion

const obtenerNumeroAlAzar2 = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(
  "ejemplo de numero elegido al azar entre 1 y 10 =>",
  obtenerNumeroAlAzar2(1, 10)
); // => la uso asi porque no recibe parametros

const items = ["😀", "😃", "😆", "🤣"];
const obtenerCaraAlAzar = (items) => {
  //retornar cara al azar
  return items;
};
console.log(obtenerCaraAlAzar(items));

// =>Resolucion del ejercicio:

const arrayItems = ["🍉", "🍐", "🍌", "🍇", "🍎", "🍊"];

const obtenerNumeroAlAzar = () => {
  return Math.floor(Math.random() * 6);
};
const obtenerFrutaAlAzar = () => {
  return arrayItems[obtenerNumeroAlAzar()];
};
console.log("fruta elegida al azar =>", obtenerFrutaAlAzar());

// 😀 EJERCICIO 5
// Declara la variable listaDeFrutas como un array vacio
// Usando la funcion obtenerFrutaAlAzar(), asigna una fruta en la posicion 0 del array listaDeFrutas
// Hace lo mismo para las posiciones 1, 2, 3 y 4.
// Al final te va a quedar un array con 5 frutas al azar. Pero el codigo esta algo repetitivo, no? Podemos mejorarlo reemplazando esa asignación con un for.

const listaDeFrutas = [];

// listaDeFrutas[0] = obtenerFrutaAlAzar();
// listaDeFrutas[1] = obtenerFrutaAlAzar();
// listaDeFrutas[2] = obtenerFrutaAlAzar();
// listaDeFrutas[3] = obtenerFrutaAlAzar();
// listaDeFrutas[4] = obtenerFrutaAlAzar();

// console.log(listaDeFrutas);

// segunda opcion usando "for"

for (let i = 0; i < listaDeFrutas.length; i++) {
  listaDeFrutas[i] = obtenerFrutaAlAzar(arrayItems);
}
console.log("lista de frutas con 'for'", listaDeFrutas);
// console.log(listaDeFrutas[0]) // => me da un elemento especifico del array

// 😀 EJERCICIO 6
// Declarar la variable otraListaDeFrutas como un array vacio.
// Hacer un for que cuente 5 numeros (desde 0 hasta 4, o desde 1 hasta 5). (sin recorrer un array)
// En cada iteracion, llamar a la funcion obtenerFrutaAlAzar y asignar la fruta al array otraListaDeFrutas.

const otraListaDeFrutas = [];

for (let i = 0; i < 5; i++) {
  otraListaDeFrutas[i] = obtenerFrutaAlAzar();
}
console.log("Esta es otra lista de frutas", otraListaDeFrutas);
