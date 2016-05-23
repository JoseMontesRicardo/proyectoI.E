var cargarNinosController = (db)=>{
	return (req, res)=>{
		var grado = req.body.grado,
			grupo = req.body.grupo

		db.driver.execQuery(`SELECT ti, nombre1, nombre2, apellido1, apellido2 
								FROM db_colegio.estudiante 
								where ( estudiante.grado='${grado}' and estudiante.grupo='${grupo}' )`,
			(err, result)=>{
				if (err){
					throw (err)
				} else {
					res.send({ ninos: result })
				}
			} )
	}
}
module.exports = cargarNinosController