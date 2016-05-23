var validarInforme = (informe, periodo, ti)=>{
	return new Promise((resolve, reject)=>{
		var fecha = new Date()

		informe.find({
			periodo 		: periodo,
			año 			: fecha.getFullYear(),
			estudiante_ti 	:ti
		}, (err, existe)=>{
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		})
	})
}

module.exports = validarInforme