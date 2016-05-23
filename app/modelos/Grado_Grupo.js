var Grado_Grupo = function(db){
	return db.define('grado_grupo',
	{
		grado_idgrado 	: {type: 'integer', key: true},
		grupo_idgrupo 	: {type: 'integer', key: true}
	})
}

module.exports = Grado_Grupo