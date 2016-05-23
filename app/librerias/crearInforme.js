var crearInforme = (informe, periodo, ti)=>{
	return new Promise( (resolve, reject)=>{
		fecha = new Date()

		informe.create({
			periodo 		: periodo,
			año 			: fecha.getFullYear(),
			estudiante_ti 	: ti
		}, (err, nuevo)=>{
			if (err){
				throw (err)
			} else {
				resolve(nuevo)
			}
		})
	} )
}

module.exports = crearInforme