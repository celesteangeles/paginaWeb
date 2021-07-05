let bcrypt = require('bcrypt');

let password = 'celelamejor';

let resultado = bcrypt.hashSync(password, 10);

let validacion = bcrypt.compareSync( password,resultado);
console.log(validacion)