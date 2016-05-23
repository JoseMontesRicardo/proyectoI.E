var Informe = function(db){
	return db.define('informe',
	{
		idinforme		: {type: 'integer', key: true},
		periodo 		: {type: 'text'},
		año 			: {type: 'text'},
		estudiante_ti 	: {type: 'text'}
	})
}

module.exports = Informe