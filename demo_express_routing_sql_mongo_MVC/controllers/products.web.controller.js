const Product = require('../models/products.model');

// READ
const getProduct = async (req, res) => {
        try {
            const id = req.params.id;
            let products = id? await Product.find({id},'-_id -__v') : await Product.find({},'-_id -__v'); //{}
            res.status(200).render("products",{products,msj:"Café??"}); // Respuesta de la API para 1 producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}



module.exports = {
    getProduct,

}