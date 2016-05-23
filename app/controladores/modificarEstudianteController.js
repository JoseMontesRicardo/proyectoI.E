var modificarEstudianteController = function(estudiantes){

	return function(req, res){
		var estudianteRecibido = req.body

		estudiantes.get( estudianteRecibido.ti, function(err, estudiante){
			if (err){
				throw (err)
			} else {
				if ( estudiante ){
					estudiantedb = {
					ti	 		 		: estudiante.ti,
					nombre1 	 		: estudiante.nombre1,
					nombre2 	 		: estudiante.nombre2,
					apellido1 	 		: estudiante.apellido1,
					apellido2 	 		: estudiante.apellido2,
					sexo		 		: estudiante.sexo,
					direccion 	 		: estudiante.direccion,
					f_nacimiento 		: estudiante.f_nacimiento,
					acudiente_cedula	: estudiante.acudiente_cedula,
					grado				: estudiante.grado
					

				}
				
				if ( estudiantedb.ti === estudianteRecibido.ti && estudiantedb.grado === estudianteRecibido.grado && estudiantedb.nombre1 === estudianteRecibido.nombre1 && estudiantedb.nombre2 === estudianteRecibido.nombre2 && estudiantedb.apellido1 === estudianteRecibido.apellido1  && estudiantedb.apellido2 === estudianteRecibido.apellido2 && estudiantedb.direccion === estudianteRecibido.direccion && estudiantedb.f_nacimiento === estudianteRecibido.f_nacimiento && estudiantedb.acudiente_cedula === estudianteRecibido.acudiente_cedula && estudiantedb.sexo === estudianteRecibido.sexo ){
					res.send({ modifico: false })
				} else {
					estudiante.save(estudianteRecibido, function(err){
						if (err){
							throw (err)
						} else {
							res.send({ modifico: true })
						}
					})
				}
				}
			}
		} )
	}
}
	module.exports = modificarEstudianteController