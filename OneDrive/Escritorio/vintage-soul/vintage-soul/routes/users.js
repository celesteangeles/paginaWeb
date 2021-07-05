var express = require('express');
var router = express.Router();
let userController= require('../controllers/userController.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register',userController.create);


router.get('/login', userController.login);
router.post('/login', userController.processLogin);

router.get('/list',userController.list);

router.get('/search', userController.search);



router.get('/edit/:idUser', userController.edit);
router.put('/edit', userController.actualizar);


router.delete('/delete/:idUser', userController.borrar);

module.exports = router;                                                                                                                                                                                                                                                                                                                                                                                                                  
