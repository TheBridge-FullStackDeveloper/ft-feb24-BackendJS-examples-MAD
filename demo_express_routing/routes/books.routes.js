const router = require('express').Router(); // objeto de rutas
const booksController = require('../controllers/books.controller.js'); // Importar el controlador. Representa el objeto con métodos que manejan las peticiones

// CRUD --> CREATE, READ, UPDATE, DELETE

// Params:
// http://localhost:3000/api/books/quijote
// http://localhost:3000/api/books/
// http://localhost:3000/api/books/celestina

router.get("/:title?", booksController.getBook);

/*
{
  "title": "Don Quijote de la Mancha",
  "author":"Miguel de Cervantes",
  "pages": 2000,
  "year":1550,
  "description": "en un lugar de la mancha..."
}
*/
// POST http://localhost:3000/api/books
router.post("/", booksController.createBook);

// PUT http://localhost:3000/api/books
router.put("/",  booksController.editBook);

// DELETE http://localhost:3000/api/books/quijote
router.delete("/:title?", booksController.deleteBook);

module.exports = router;