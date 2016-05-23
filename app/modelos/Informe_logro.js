var Informe_logro = function(db){
	return db.define('informe_logro',
	{
		informe_idinforme	: {type: 'integer', key: true},
		logro_idlogro 		: {type: 'text'},
		nota				: {type: 'number'},
		observacion 		: {type: 'text'}
	})
}

module.exports = Informe_logro