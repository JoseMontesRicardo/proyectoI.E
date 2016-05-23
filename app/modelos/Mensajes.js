var mensajes = function(db){
	return db.define('mensajes',
	{
		idmensajes 	: {type: 'integer', key: true},
		mensaje 	: {type: 'text'},
		emisor 		: {type: 'text'},
		receptor 	: {type: 'text'},
		leido 		: {type: 'integer'}
	})
}

module.exports = mensajes