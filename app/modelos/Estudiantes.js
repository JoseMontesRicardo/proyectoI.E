
var Estudiante = function(db){
	return db.define('estudiante',
	{
		ti  					: {type: 'text', key: true},
		nombre1 				: {type: 'text'},
		nombre2 				: {type: 'text'},
		apellido1 				: {type: 'text'},
		apellido2 				: {type: 'text'},
		direccion 				: {type: 'text'},
		sexo 	 				: {type: 'text'},
		grado 					: {type: 'integer'},
		grupo 					: {type: 'integer'},
		f_nacimiento			: {type: 'date'},
		acudiente_cedula 		: {type: 'integer'}
	})
}

module.exports = Estudiante