
var validarSalon = function(grado_grupo, grado, grupo){
	return new Promise((resolve, reject)=>{
		grado_grupo.exists( { grado_idgrado: grado, grupo_idgrupo: grupo }, function(err, existe){
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		} )
	})
}

module.exports = validarSalon