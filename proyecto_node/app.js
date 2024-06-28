const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const hbs = require('hbs') 

//middleware para servir contenidos estaticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials')); // para parciales


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio',
    message: 'Bienvenidos a nuestra aplicación express con Handlebars'
  });
});

app.get('/acerca', (req, res) => {
  res.render('acerca', {
    title: 'Acerca de nosotros',
    message: 'Información sobre nuestro proyecto'
  });
});

app.get('/contacto', (req, res) => {
  res.send('Contacto');
});

app.get('/usuarios', (req, res) => {
  const usuarios = [
    {nombre: 'Cosme Fulano', email: 'cosme@gmail.com'},
    {nombre: 'Cosmecito Fulanito', email: 'fulanito@gmail.com'}
  ];
  res.render('usuarios', { usuarios });
});


//Método POST, PUT, DELETE
app.post('/enviar.formualrio', (req, res) => {
  res.send('Formulario enviado');
});

app.put('/actualizar-datos', (req, res) => {
  res.send('Datos actualizados');
});

app.delete('/eliminar-datos', (req, res) => {
  res.send('Datos eliminados');
});

// Ruta para página 404
app.use((req, res, next) => {
  res.status(404).render('error404', { title: 'Página no encontrada' });
});




app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});