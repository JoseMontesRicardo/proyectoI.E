var Grupo = function(db){
	return db.define('grupo',
	{
		idgrupo		: {type: 'integer', key: true}
	})
}
module.exports = Grupo