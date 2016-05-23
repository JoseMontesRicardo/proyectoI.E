
var Horario = function(db){
	return db.define('horario',
	{
		idhorario  		: {type: 'text', key: true},
		jornada 		: {type: 'text'},
		dia 			: {type: 'text'},
		hora 			: {type: 'text'},
		entrada 		: {type: 'text'},
		grado 			: {type: 'text'},
		grupo 			: {type: 'text'},
		docente_cedula 	: {type: 'integer'},
		idasignatura 	: {type: 'text'}
	})
}

module.exports = Horario