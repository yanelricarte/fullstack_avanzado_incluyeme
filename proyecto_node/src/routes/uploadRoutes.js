const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

// Configuración de Multer para la carga de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Directorio donde se guardan los archivos subidos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nombre original del archivo subido
  },
});
const upload = multer({ storage: storage });

// Ruta para mostrar el formulario de carga de archivos
router.get("/", (req, res) => {
  res.render("upload-form", {
    layout: "layouts/main",
    title: "Carga de archivos",
    message: "Formulario de carga de archivos.",
  });
});

// Ruta para manejar la carga de archivos (POST)
router.post("/upload", upload.single("file"), (req, res) => {
  res.render("upload-success", {
    title: "Carga Exitosa",
    message: "Archivo cargado exitosamente",
    filename: req.file.filename,
  });
});

module.exports = router;
