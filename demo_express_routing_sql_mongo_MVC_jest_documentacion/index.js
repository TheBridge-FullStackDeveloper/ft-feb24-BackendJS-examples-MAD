const express = require("express");
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = 3000;

// Importar middlwewares
//const checkApiKey = require("./middlewares/auth_api_key");
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
const booksRoutes = require("./routes/books.routes")
const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
const productsWebRoutes = require("./routes/products.web.routes")

//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones
//app.use(checkApiKey); // Middleware que comprueba la API KEY de manera global

// Configuración de PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');

/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Welcome to backend!");
});

//API
app.use('/api/books',booksRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/entries',entriesRoutes);

// WEB
app.use('/products',productsWebRoutes);

// Templates
// http://localhost:3000/first_template
app.get('/first_template', function(req, res){
  res.render('first_view');
});

app.get('/dynamic_view', function(req, res){
  res.render('dynamic', {
     name: "Fullstack The Best", 
     url:"https://www.thebridgeschool.tech"
  });
});

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Documentación JSDOC
app.use('/api-jsdoc', express.static(path.join(__dirname, '/jsondocs')));

//app.use(error404);
app.use("*",error404); // Middleware que gestiona el error 404

// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
