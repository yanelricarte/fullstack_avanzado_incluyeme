const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const hbs = require('hbs');
const { default: axios } = require('axios');

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Registrar parciales
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));



// Rutas
app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main',
    title: 'Inicio',
    message: 'Bienvenidos a nuestra aplicación express con Handlebars'
  });
});

app.get('/acerca', (req, res) => {
  res.render('acerca', {
    layout: 'layouts/main',
    title: 'Acerca de nosotros',
    message: 'Información sobre nuestra aplicacion.'
  });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', {
    layout: 'layouts/main',
    title: 'Contacto',
    message: 'Página de contacto'
  });
});

app.get('/usuarios', (req, res) => {
  const usuarios = [
    { nombre: 'Cosme Fulano', email: 'cosme@gmail.com' },
    { nombre: 'Cosmecito Fulanito', email: 'fulanito@gmail.com' }
  ];
  res.render('usuarios', { usuarios });
});

// Ruta para mostrar personajes
app.get('/personajes', async(req, res) =>{
  try{
    const response = await axios.get('https://hp-api.herokuapp.com/api/characters');
    const characters = response.data;
    res.render('personajes', { characters});
  } catch(error){
    console.error('Error al obtener personajes', error);
    res.status(500).send('Error al obtener personajes');
  }
})



// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).render('error404', { title: 'Página no encontrada' });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
