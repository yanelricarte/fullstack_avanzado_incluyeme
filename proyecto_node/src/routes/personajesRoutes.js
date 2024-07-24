const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const personajesController = require("../controllers/personajesController");

// Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/")); // Ruta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Agrega un timestamp al nombre del archivo
  }
});
const upload = multer({ storage: storage });

// Ruta para mostrar todos los personajes
router.get("/", personajesController.getAllPersonajes);
// Ruta para mostrar el formulario
router.get("/crear", (req, res) => {
  res.render("formulario", { layout: "layouts/main" });
});
// Ruta para manejar la creación de un nuevo personaje
router.post("/crear", upload.single("imagen"), personajesController.createPersonaje);

// Ruta para mostrar el formulario de edición
router.get('/edit/:id', personajesController.editPersonaje);

// Ruta para manejar la actualización de un personaje
router.post("/edit/:id", upload.single("imagen"), personajesController.updatePersonaje);


// Ruta para eliminar un personaje
router.get("/delete/:id", personajesController.deletePersonaje);


module.exports = router;