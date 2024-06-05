/** Nivelación JS - Clase 1 */
/* 
console.log("Hola mundo");


//Variables
var nombre = "Cosme";

let apellido = "Fulanito";
let edad = 25;
const PI = 3.14;

console.log(nombre, apellido, edad, PI);


//Funciones
function saludar(nombre, apellido, edad){
  document.write("Hola ", nombre, apellido, edad);
}
saludar("Cosme ", "Fulanito ", 34)



function sumar(numeroA, numeroB){
  return numeroA + numeroB;
}

let resultado = sumar(3, 9);

console.log(resultado);

//Condicionales

function esMayorEdad(edad) {
  if (edad >= 18) {
    return "Es mayor de edad";
  } else if (edad >= 13) {
    return "Es adolescente";
  } else {
    return "Es menor de edad";
  }
}

let resultado = esMayorEdad(33);

console.log(resultado);

let categoria = "mexicana";
let tipoComida;

switch (categoria) {
  case "mexicana":
    tipoComida = "Tacos";
    break;
  case "china":
    tipoComida = "Arroz frito";
    break;
  case "francesa":
    tipoComida = "Croissant";
    break;
  default:
    tipoComida = "No especificada";
    break;
}

console.log("Catagoría: ", categoria, "Plato: ", tipoComida);

//While
let contador = 0;

while (contador < 5) {
    console.log("El contador es: " + contador);
    contador++;
}

console.log("Completado");

let personajes = [
  { nombre: "Harry Potter", casa: "Gryffindor", edad: 17 },
  { nombre: "Hermione Granger", casa: "Gryffindor", edad: 18 },
  { nombre: "Ron Weasley", casa: "Gryffindor", edad: 17 },
  { nombre: "Draco Malfoy", casa: "Slytherin", edad: 17 },
  { nombre: "Luna Lovegood", casa: "Ravenclaw", edad: 16 }
];

//Usamos for para iterar cada personaje

for( let i = 0; i < personajes.length; i++){
  let personaje = personajes[i];
  console.log(` Nombre: ${personaje.nombre}, Casa: ${personaje.casa} Edad: ${personaje.edad}`);
}



//Eventos - Manipulación del DOM 

let miBoton = document.getElementById("boton");
console.log(miBoton)
miBoton.addEventListener("click", function(){
  alert("Hiciste click en el boton")
})


//Delegación
let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        alert("Hiciste clic en un botón dentro del contenedor.");
    }
});

//Propagacion 

let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", function(event) {
    event.stopPropagation() //Detiene la propagación del evento
{
        alert("Evento detenido en el contenedor");
    }
}) */

// Modificación del DOM 
let miElemento = document.getElementById("mi-elemento")
miElemento.textContent = "Nuevo contenido";


// Eliminar contenido
let elementoAEliminar = document.getElementById("elemento-a-eliminar")
elementoAEliminar.remove();

//Agregar elemento hijo

let contenedor = document.getElementById("contenedor");
let nuevoElemento = document.createElement("p"); 
nuevoElemento.textContent = "Este es un nuevo contenido con appendClild"

contenedor.appendChild(nuevoElemento)