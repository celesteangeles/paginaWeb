var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Bienvenidos a mi pagina web');
});

router.get('/contacto', function(req, res, next) {
  res.send('Dejanos tu contacto');
});

router.get('/productos/:idProducto', function(req, res, next) {
  res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
});

router.get('/productos/:idProducto/comentarios/:idComentario?', function(req,res){ 
  if (req.params.idComentario == undefined){
    res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
  }else{
  res.send('Bienvenidos al detalle del producto ' + req.params.idProducto + " y estas enfocado en el comentario " + req.params.idComentario);
}
});

module.exports = router;
