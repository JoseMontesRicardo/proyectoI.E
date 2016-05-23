var validarDocente = function(docentes, cedula){
	return new Promise((resolve, reject)=>{
		docentes.exists( { usuario_cedula: cedula }, function(err, existe){
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		} )
	})
}

module.exports = validarDocente