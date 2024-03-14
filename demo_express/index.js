const express = require("express");
const app = express();
const port = 3000;

// http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Home. Welcome to backend!");
});

// http://localhost:3000/hola
app.get("/hola", (req, res) => {
  res.status(200).send("Hello World!");
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
// http://localhost:3000/books/quijote
// http://localhost:3000/books/
// http://localhost:3000/books/celestina
app.get("/books/:title?", (req, res) => {
  console.log(req.params.title);

  if (req.params.title) {
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

/*

app.post("/books", (req, res) => {

});

app.put("/books", (req, res) => {

});
app.delete("/books/:title?", (req, res) => {

});

*/

// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
