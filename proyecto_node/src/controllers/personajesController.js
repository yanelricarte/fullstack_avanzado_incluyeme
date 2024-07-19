const Personaje = require('../models/personajeModel');

const getAllPersonajes = async (req, res) => {
  try {
    const personajes = await Personaje.find();
    res.render("personajes", { layout: "layouts/main", personajes });
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    res.status(500).send("Hubo un error al obtener los personajes");
  }
};

const createPersonaje = async (req, res) => {
  const { nombre, edad, casa, rol } = req.body;
  const imagenPath = req.file ? req.file.filename : ''; // Ruta de la imagen guardada en el servidor

  try {
    const nuevoPersonaje = new Personaje({
      nombre,
      edad: parseInt(edad),
      casa,
      rol,
      imagen: imagenPath,
    });
    await nuevoPersonaje.save();
    res.redirect("/personajes");
  } catch (error) {
    console.error("Error al crear personaje:", error);
    res.status(500).send("Hubo un error al crear el personaje");
  }
};

module.exports = {
  getAllPersonajes,
  createPersonaje
};
