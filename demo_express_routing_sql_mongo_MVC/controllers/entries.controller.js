const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

/*
{
        title: "Nos vamos de tortillas",
        content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
        date: "2021-12-25",
        category: "sucesos",
        email: "alejandru@thebridgeschool.es",
        old_title: "Noticia: Un panda suelto por la ciudad"
    }
*/

const updateEntry = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,category,email,old_title}
    const response = await entry.updateEntry(modifiedEntry);
    res.status(200).json({
        "items_updated": response,
        data: modifiedEntry
    });
}


module.exports = {
    getEntries,
    createEntry,
    updateEntry
    //deleteEntry, --> DELETE
}