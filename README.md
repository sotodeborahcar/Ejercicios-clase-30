# 39-ejercicios

1.

- Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 5).
- Guardar en variables el valor del primero, tercero y sexto elemento del array.
- Mostrar por consola los siguientes 3 mensajes:
  La banda en primer lugar es: [NOMBRE_DE_LA_PRIMERA_BANDA]
  La banda en tercer lugar es: [NOMBRE_DE_LA_TERCERA_BANDA]
  La banda en sexto lugar es: [NOMBRE_DE_LA_QUINTA_BANDA]

2.

- Crear un array con el nombre **notas** y asignarle 10 valores numéricos de 1 a 10.
- Hacer una funcion sumarNotas() que reciba el array como argumento y retorne la suma de todas.
- Hacer una funcion calcularPromedio() que reciba el array como argumento y retorne el promedio de notas (podes utilizar `sumarNotas()` para reutilizar codigo).

3.

- Declarar el array `playlist`

```js
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
```

- Recorrer la lista de canciones con un **ciclo for** y mostrarlas en consola
  - De inicio a fin
  - De fin a inicio

4.  - Crear una funcion obtenerNumeroAlAzar() que retorne un numero del 0 al 5 al azar.
    - Declarar el array **items** con los siguientes valores: '🍉', '🍐', '🍌', '🍇', '🍎', '🍊'
    - Crear la funcion obtenerFrutaAlAzar() que reciba como argumento `items` y retorne una fruta del array, usando la funcion `obtenerNumeroAlAzar`.

5.

- Declara la variable listaDeFrutas como un array vacio
- Usando la funcion obtenerFrutaAlAzar(), asigna una fruta en la posicion 0 del array listaDeFrutas
- Hace lo mismo para las posiciones 1, 2, 3 y 4.

Al final te va a quedar un array con 5 frutas al azar. Pero el codigo esta algo repetitivo, no? Podemos mejorarlo reemplazando esa asignación con un _for_.

6.

- Declarar la variable otraListaDeFrutas como un array vacio.
- Hacer un for que cuente 5 numeros (desde 0 hasta 4, o desde 1 hasta 5). _(sin recorrer un array)_
- En cada iteracion, llamar a la funcion obtenerFrutaAlAzar y asignar la fruta al array otraListaDeFrutas.
