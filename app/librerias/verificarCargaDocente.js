var verificarCargaDocente = (carga_academica, cedula, idasignatura)=>{
	return new Promise((resolve, reject)=>{
		carga_academica.exists({
			docente_cedula	: cedula,
			idasignatura 	: idasignatura
		}, (err, dicta)=>{
			if (err){
				throw (err)
			} else {
				resolve(dicta)
			}
		})
	})
}
module.exports = verificarCargaDocente