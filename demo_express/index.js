const express = require("express");
const app = express();
const port = 3000;

//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones

/******RUTAS ******/

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Welcome to backend!");
});

// http://localhost:3000/hola
app.get("/hola", (req, res) => {
  res.status(200).send("Hello World!!!");
});

// http://localhost:3000/weather
app.get("/weather", (req, res) => {
  res.status(200).send("Aquí datos del clima");
});

/*
// http://localhost:3000/books/quijote
// http://localhost:3000/books/hamlet
// http://localhost:3000/books/celestina
// http://localhost:3000/books/la-odisea
// http://localhost:3000/books
app.get("/books/:title?", (req, res) => {
    console.log(req.params);
    const title = req.params.title;

    if(title){ // 1 libro
        res.status(200).send(`Aquí datos del libro ${title}`);
    }
    else{ // Todos los libros
        res.status(200).send(`Aquí datos de todos los libros` );
    }
});
*/

// Params:
// GET http://localhost:3000/books/quijote
// GET http://localhost:3000/books/
// GET http://localhost:3000/books/celestina
app.get("/books/:title?", (req, res) => {
  console.log(req.params.title);

  if (req.params.title) {
    const title = req.params.title;

    // Código para buscar en la BBDD
    // SELECT * FROM books WHERE title = title
    // ...
    // ...
    //const book = {//Objeto respuesta de la BBDD}

    // 1 libro
    res.status(200).json({
      message: "Has solicitado:" + req.params.title,
      title: req.params.title,
      success: true,
      data: {
        title: req.params.title,
        author: "Shakespeare",
        pages: 2000,
        year: 1550,
        description: "en un lugar de la mancha...",
      },
    });
  } else {
    // Todos los libros

    // Código SQL buscar todos los libros en la BBDD
    // SELECT * FROM books
    // ...
    // ...
    //const books = {//Array de objetos respuesta de la BBDD}

    res.status(200).json({
      message: "Aquí van tus libros!",
      success: true,
      data: [
        {
          title: "Don Quijote de la Mancha",
          author: "Miguel de Cervantes",
          pages: 2000,
          year: 1550,
          description: "en un lugar de la mancha...",
        },
        {
          title: "Hamlet",
          author: "Miguel de Cervantes",
          pages: 2000,
          year: 1550,
          description: "en un lugar de la mancha...",
        },
        {
          title: "Lazarillo de Tormes",
          author: "Miguel de Cervantes",
          pages: 2000,
          year: 1550,
          description: "en un lugar de la mancha...",
        },
      ],
    });
  }
});

// POST http://localhost:3000/books
/* {
  "title": "Don Quijote de la Mancha",
  "author":"Miguel de Cervantes",
  "pages": 2000,
  "year":1550,
  "description": "en un lugar de la mancha..."
} 
*/
app.post("/books", (req, res) => {
  console.log(req.body);
  const book = req.body;
  // Código para guardar en la BBDD
  // INSERT INTO books (title, author, pages, year, description) VALUES (book.title, book.author, book.pages, book.year, book.description)
  // ...
  // ...

  res.status(201).json({
    success: true,
    title: book.title,
    id: Math.floor(Math.random() * (10000 - 1) + 1),
    data: book,
  });
});
// PUT http://localhost:3000/books
app.put("/books/:title?", (req, res) => {
  const title = req.params.title;
  res.status(201).send("Se ha editado un libro: " + title);
});

// DELETE http://localhost:3000/books/quijote
// DELETE http://localhost:3000/books/hamlet
// DELETE http://localhost:3000/books
app.delete("/books/:title?", (req, res) => {
  const title = req.params.title;

  if (title) {
    // código borrar BBDD 1 libro
    res.status(200).send("Se ha borrado un libro: " + title);
  } else {
    // código borrar BBDD
    res.status(200).send("Se han borrado todos los libros");
  }
});

// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
