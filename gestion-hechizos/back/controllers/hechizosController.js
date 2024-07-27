const mongoose = require('mongoose');
const Hechizo = require('../models/HechizoModel');

// Obtener todos los hechizos
exports.getHechizos = async (req, res) => {
  try {
    const hechizos = await Hechizo.find();
    res.json(hechizos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un hechizo por ID
exports.getHechizoById = async (req, res) => {
  try {
    const hechizo = await Hechizo.findById(req.params.id);
    if (hechizo) {
      res.json(hechizo);
    } else {
      res.status(404).json({ message: 'Hechizo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Crear un nuevo hechizo
exports.createHechizo = async (req, res) => {
  const hechizo = new Hechizo({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    nivel: req.body.nivel,
  });
  
  try {
    const nuevoHechizo = await hechizo.save();
    res.status(201).json(nuevoHechizo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

