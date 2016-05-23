
var Usuario = function(db){
	return db.define('usuario',
	{
		cedula 		: {type: 'integer', key: true},
		nombre1 	: {type: 'text'},
		nombre2 	: {type: 'text'},
		apellido1 	: {type: 'text'},
		apellido2 	: {type: 'text'},
		password	: {type: 'text'},
		direccion 	: {type: 'text'},
		email 	 	: {type: 'text'},
		telefono	: {type: 'text'},
		sexo 	 	: {type: 'text'},
		estado 		: {type: 'text'},
		rol 	 	: {type: 'integer'}
	})
}

module.exports = Usuario