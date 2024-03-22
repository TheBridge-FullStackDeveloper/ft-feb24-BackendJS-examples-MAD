const productsController = require('../controllers/products.controller');
const router = require('express').Router();

// http://localhost:3000/api/products
// http://localhost:3000/api/products/1
// http://localhost:3000/api/products/5
router.get("/:id?", productsController.getProduct);
// Ejercicio: habilitar ruta post para crear un producto y ejecutarlo en Thunder Client

/*
{
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 4.6,
    "count": 400
    }
}

*/
// POST http://localhost:3000/api/products
router.post("/", productsController.createProduct);

module.exports = router;