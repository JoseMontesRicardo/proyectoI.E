var Acudiente = function(db){
	return db.define('acudiente',
	{
		usuario_cedula 		: {type: 'integer', key: true},
	})
}

module.exports = Acudiente