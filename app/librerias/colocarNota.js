var colocarNota = (informe_logro, idinforme, idlogro, nota, observacion )=>{
	return new Promise((resolve, reject)=>{
		informe_logro.create({
			informe_idinforme	: idinforme,
			logro_idlogro 		: idlogro,
			nota 				: nota,
			observacion 		: observacion
		}, ( err, nuevo )=>{
			if (err){
				throw (err)
			} else {
				resolve(nuevo)
			}
		})
	})
}

module.exports = colocarNota