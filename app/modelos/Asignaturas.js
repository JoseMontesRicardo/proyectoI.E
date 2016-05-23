var Asignatura = function(db){
	return db.define('asignatura',
	{
		idasignatura  			: {type: 'integer', key: true},
		nombre					: {type: 'text'},
		area_codigo				: {type: 'integer'}
	})
}

module.exports = Asignatura