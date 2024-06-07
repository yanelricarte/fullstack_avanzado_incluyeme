//Espera a que el contenido del DOM este completamnete cargado
document.addEventListener('DOMContentLoaded', function(){
// Asocia la función agregarMascota al evento 'click' del botón 'agregarMascota'
  document.getElementById('agregarMascota').addEventListener('click', agregarMascota);
});

/** 
 * Función para agregar una nueva mascota a la lista
 */

function agregarMascota(){
  //Obtenemos el valor del input 'nuevaMascota' y eliminamos espacios en blanco
  const nombreMascota = document.getElementById("nuevaMascota").value.trim();

  //Verifica si el campo de la enterda esta vacío. Si es así, muestra un alert
  if(nombreMascota ==""){
    alert("Por favor, ingrese el nombre de la mascota");
    return;
  }

  const nuevaMascota = document.createElement("li");
  nuevaMascota.textContent = nombreMascota;
  nuevaMascota.classList.add("mascota");

  
document.getElementById('listaMascotas').appendChild(nuevaMascota);


//Crear un nuevo botón para elimnar la mascota 
const botonEliminar = document.createElement("button");
//Aignar el texto "Eliminar" al botón
botonEliminar.textContent = " Eliminar";
//Asigna una función al evento 'click' del boton eliminarMascota pasando como argumento el elemento li
botonEliminar.onclick = function (){
  eliminarMascota(nuevaMascota);
};

//Añade el botón eliminar como hijo del elemento li
nuevaMascota.appendChild(botonEliminar);

document.getElementById("listaMascota").appendChild(nuevaMascota);

//Limpiar el campo de entrada despues de agregar mascota

document.getElementById("nuevaMascota").value = "";


}


/** Funcion para eliminar una mascota  
 * 
*/

function eliminarMascota(mascota){
  mascota.remove();
}