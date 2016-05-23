var verificarNota = (informe_logro, idinforme, idlogro)=>{
	return new Promise( (resolve, reject)=>{
		informe_logro.exists({
			informe_idinforme	: idinforme,
			logro_idlogro 		: idlogro
		}, (err, existe)=>{
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		})
	} )
}

module.exports = verificarNota