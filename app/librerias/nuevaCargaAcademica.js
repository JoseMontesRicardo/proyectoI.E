var nuevaCargaAcademica = (carga_academica, idasignatura, cedula)=>{
	return new Promise((resolve, reject)=>{
		carga_academica.create({
			docente_cedula	: cedula,
			idasignatura 	: idasignatura
		}, (err, nuevo)=>{
			if (err){
				throw (err)
			} else {
				resolve(nuevo)
			}
		})
	})
}

module.exports = nuevaCargaAcademica