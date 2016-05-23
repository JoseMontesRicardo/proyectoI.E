var Grado = function(db){
	return db.define('grado',
	{
		idgrado		: {type: 'integer', key: true}
	})
}
module.exports = Grado