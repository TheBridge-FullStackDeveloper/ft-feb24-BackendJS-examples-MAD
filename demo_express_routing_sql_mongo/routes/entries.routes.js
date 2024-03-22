const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getEntries);
router.post('/', entriesController.createEntry);
router.put('/', entriesController.updateEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */

// PUT http://localhost:3000/api/entries
/*
{
    title: "Nos vamos de cañas!!!!",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    date: "2024-03-22",
    category: "fiestas",
    email: "alejandru@thebridgeschool.es",
    old_title: "Nos vamos de tortillas"
}
*/