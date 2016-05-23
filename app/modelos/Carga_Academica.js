var Carga_Academica = function(db){
	return db.define('carga_academica',
	{
		docente_cedula 	: {type: 'integer', key: true},
		idasignatura 	: {type: 'text', key: true}
	})
}

module.exports = Carga_Academica