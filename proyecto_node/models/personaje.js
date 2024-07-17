
const mongoose = require("mongoose");

const personajeSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  casa: { type: String, required: true },
  rol: { type: String, required: true },
  imagen: { type: String, required: true }, // Ruta de la imagen
});

module.exports = mongoose.model("Personaje", personajeSchema);
