//Espera a que el contenido del DOM este cargado

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('agregarMascota').addEventListener('click', agregarMascota);
});

/** 
 * Función para agregar nueva mascota a la lista
 */

function agregarMascota(){
//Obtenemos el valor del input 'nuevaMascota' y eliminamos espacios en blanco
  const nombreMascota = document.getElementById("nuevaMascota").value.trim();

  if(nombreMascota ==""){
    alert("Por favor, ingrese el nombre de la mascota");
    return;
  }

  const nuevaMascota = document.createElement("li");
  nuevaMascota.textContent = nombreMascota;
  nuevaMascota.classList.add("mascota");



  
document.getElementById('listaMascotas').appendChild(nuevaMascota);
}




