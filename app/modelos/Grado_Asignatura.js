var Grado_Asignatura = function(db){
	return db.define('grado_asignatura',
	{
		grado_idgrado 				: {type: 'integer', key: true},
		asignatura_idasignatura 	: {type: 'text', key: true}
	})
}

module.exports = Grado_Asignatura