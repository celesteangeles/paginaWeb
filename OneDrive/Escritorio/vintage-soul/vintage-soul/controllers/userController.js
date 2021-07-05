let fs = require('fs');
let bcrypt = require('bcrypt');

let userController = {
    'register' : function (req, res){
        res.render('register');
    },
    'login': function ( req,res){
        res.render('login')
    },
    'list': function( req , res){
        let archivoJSON = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

        let users = JSON.parse(archivoJSON);
    
    res.render('userList', { 'users': users});
},
search: function(req,res) {
    let  loQueBuscoElUsuario = req.query.search;

    let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

    let users = JSON.parse(archivoJSON);
    
  

    let usersResults = [];
        for (let i =  0 ; i <users.length; i ++){
        if (users[i].name.includes(loQueBuscoElUsuario)){
            usersResults.push(users[i]);
        }
    }
    res.render('usersResults', { usersResults : usersResults})
},
create: function(req,res){
    let usuario = {
        name: req.body.name,
        edad: req.body.edad,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    // guardarla 
  // primero leer que cosas habia 
  
  let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
  let usuarios;
  if (archivoUsuario == "") {
       usuarios = [];
  }else{
       usuarios = JSON.parse(archivoUsuario);
  }

  usuarios.push(usuario);

  usuariosJSON = JSON.stringify(usuarios);

  fs.writeFileSync('usuarios.json', usuariosJSON);


    res.redirect('/users/list');

},
edit: function(req,res){
/// que numero de id usar:
    let idUser = req.params.idUser;
   
    let users = [
        {id: 1, name: 'Celeste'},
        {id: 2, name: 'Ariel'},
        {id: 3, name: 'Noelia'},
        {id: 4, name: 'Lara'}
    ];

    let userToEdit = users[idUser];


    res.render("userEdit", {userToEdit: userToEdit})

},
actualizar: function(req,res){
    res.send('fui por put');
},
borrar: function(req,res){
    res.send('Fui por delete');
},
processLogin: function(req,res){

    let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
 
    let usuarios;
    if (archivoUsuario == "") {
        usuarios = [];
    } else{
            usuarios = JSON.parse(archivoUsuario);
    }
    
    for ( let i = 0 ; i <usuarios.length; i++) { // por cada uno de los usuarios
            if (req.body.email == usuarios[i].email ){
      res.send('te encontree');
            }
        }

        res.send('error');



}

};

module.exports = userController;