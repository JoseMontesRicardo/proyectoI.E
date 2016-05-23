var validarCargaAcademica = (carga_academica, cedula, asignatura)=>{
	return new Promise((resolve, reject)=>{
		carga_academica.exists({ 
			idasignatura	: asignatura, 
			docente_cedula	: cedula },
		(err, existe)=>{
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		})
	})
}

module.exports = validarCargaAcademica