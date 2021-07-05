
var express = require('express');
const productosController = require('../controllers/productosController.js');

var router = express.Router();


router.get('/',productosController.producto)
router.get('/:idProducto', productosController.detalle );

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentario);

module.exports = router;