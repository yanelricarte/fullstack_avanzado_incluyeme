# Proyecto Node.js: Gestión de Personajes y Carga de Archivos

Este proyecto es una aplicación Node.js que utiliza Express y Handlebars para gestionar personajes y permitir la carga de archivos. A continuación, se detalla la estructura del proyecto, su configuración y los pasos para ejecutarlo.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

proyecto_node/
│
├── public/ # Archivos estáticos como CSS, JS e imágenes
│
├── src/
│ ├── config/ # Configuración de la aplicación
│ │ └── db.js # Configuración y conexión a MongoDB
│ │
│ ├── Controllers/ # Controladores de la aplicación
│ │ └── personajesControlles.js #
│ ├── routes/ # Rutas de la aplicación
│ │ ├── uploadRoutes.js # Rutas para la carga de archivos
│ │ └── personajesRoutes.js # Rutas para la gestión de personajes
│ │
│ ├── views/ # Plantillas de Handlebars
│ │ ├── layouts/ # Layouts de la aplicación
│ │ │ └── main.hbs # Layout principal
│ │ ├── partials/ # Partials reutilizables
│ │ │ ├── header.hbs # Partial para el encabezado
│ │ │ └── footer.hbs # Partial para el pie de página
│ │ └── index.hbs # Vista principal
│ │
│ └── app.js # Archivo principal de la aplicación
│
├── .env # Archivo de variables de entorno
├── .gitignore # Archivos y carpetas a ignorar por Git
├── package.json # Dependencias y scripts del proyecto
└── README.md # Este archivo



## Instalación

1. **Clonar el Repositorio:**

   git clone <URL_DEL_REPOSITORIO>
   cd proyecto_node

Instalar Dependencias:

npm install
Configurar Variables de Entorno:

Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
PORT=3000

Configuración
Conexión a la Base de Datos
El archivo src/config/db.js gestiona la conexión a MongoDB. Asegúrate de que la URI de conexión en tu archivo .env esté correctamente configurada.

Motor de Plantillas
El proyecto utiliza Handlebars como motor de plantillas. Los archivos de plantilla se encuentran en src/views:

Layouts: Plantillas de diseño base como main.hbs.
Partials: Componentes reutilizables como header.hbs y footer.hbs.
Vistas: Plantillas específicas para diferentes rutas, como index.hbs.
Rutas
Carga de Archivos: La ruta /upload gestiona la carga de archivos. Revisa src/routes/uploadRoutes.js para más detalles.
Gestión de Personajes: La ruta /personajes maneja las operaciones relacionadas con los personajes. Consulta src/routes/personajesRoutes.js para la implementación.
Archivos Estáticos
Los archivos estáticos como CSS, JavaScript e imágenes se colocan en la carpeta public/.

Ejecución
Para iniciar el servidor, utiliza el siguiente comando:
npm app

El servidor se ejecutará en el puerto definido en tu archivo .env, por defecto 3000. Accede a la aplicación en http://localhost:3000.

Manejo de Errores
En caso de rutas no encontradas, se renderiza una página de error 404. Asegúrate de revisar los archivos de error en src/views.
