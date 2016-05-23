var cargarAsignaturasDictadasController = (db)=>{
	return (req, res)=>{
		var cedula = req.session.objsesion.cedula
		db.driver.execQuery(`SELECT asignatura.nombre, asignatura.idasignatura 
							FROM carga_academica 
							INNER JOIN asignatura 
								ON ( carga_academica.idasignatura = asignatura.idasignatura ) 
							where (carga_academica.docente_cedula = ${ cedula })`, (err, result)=>{
			if (err){
				throw (err)
			} else {
				res.send({ asignaturas: result })
			}
		})
	}	
}

module.exports = cargarAsignaturasDictadasController