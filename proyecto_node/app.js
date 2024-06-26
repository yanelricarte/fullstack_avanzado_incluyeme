const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

//middleware para servir contenidos estaticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio',
    message: 'Bienvenidos a nuestra aplicación express con Handlebars'
  });
});

app.get('/sobre', (req, res) => {
  res.send('sobre nosotros');
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



app.post('/enviar.formualrio', (req, res) => {
  res.send('Formulario enviado');
});

app.put('/actualizar-datos', (req, res) => {
  res.send('Datos actualizados');
});

app.delete('/eliminar-datos', (req, res) => {
  res.send('Datos eliminados');
});




app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});