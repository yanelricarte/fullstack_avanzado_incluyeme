const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Personaje = require("../models/personaje");
const upload = multer({ dest: "uploads/" });


// Ruta para mostrar todos los personajes
router.get("/", async (req, res) => {
  try {
    const personajes = await Personaje.find(); // Obtener todos los personajes de la base de datos
    res.render("personajes", { layout: "layouts/main", personajes }); // Renderizar la vista 'personajes.hbs' con los datos obtenidos
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    res.status(500).send("Hubo un error al obtener los personajes");
  }
});



// Ruta para mostrar el formulario
router.get("/crear", (req, res) => {
  res.render("formulario", { layout: "layouts/main" });
});

// Ruta para manejar la creación de un nuevo personaje
router.post("/crear", upload.single("imagen"), async (req, res) => {
  const { nombre, edad, casa, rol } = req.body;
  const imagenPath = req.file.path; // Ruta de la imagen guardada en el servidor

  try {
    const nuevoPersonaje = new Personaje({
      nombre,
      edad: parseInt(edad),
      casa,
      rol,
      imagen: imagenPath, // Guardamos la ruta de la imagen en la base de datos
    });
    await nuevoPersonaje.save();
    res.send("Personaje creado correctamente");
  } catch (error) {
    console.error("Error al crear el personaje:", error);
    res.status(500).send("Hubo un error al crear el personaje");
  }
});

module.exports = router;
