var Logro = function(db){
	return db.define('logro',
	{
		idlogro			: {type: 'text', key: true},
		nombre 			: {type: 'text'},
		periodo  		: {type: 'text'},
		grado 			: {type: 'text'},
		idasignatura	: {type: 'text'}
	})
}
module.exports = Logro