var obtenerNotasLogro = (db, idasignatura, grado, periodo, ti)=>{
	return new Promise( (resolve, reject)=>{
		db.driver.execQuery(`select logro.idlogro, informe_logro.nota, informe_logro.observacion, informe.estudiante_ti from informe 
			INNER JOIN informe_logro 
				on ( informe_logro.informe_idinforme = informe.idinforme ) 
			INNER JOIN logro on ( informe_logro.logro_idlogro = logro.idlogro )
				where ( logro.idasignatura = ${idasignatura} and logro.grado = ${grado} and logro.periodo = ${periodo} and informe.estudiante_ti = '${ti}' )`,
		(err, notas)=>{
			if (err){
				throw (err)
			} else {
				resolve(notas)
			}
		})
	} )
}

module.exports = obtenerNotasLogro