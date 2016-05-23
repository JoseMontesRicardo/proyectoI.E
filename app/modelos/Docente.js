var Docente = function(db){
	return db.define('docente',
	{
		usuario_cedula 		: {type: 'integer', key: true},
	})
}

module.exports = Docente