var validarSalon = require('../librerias/validarSalon.js')

var nuevoEstudianteController = function(estudiantes, grado_grupo){
	return function(req, res){
		var nombre1 			= req.body.nombre1,
		nombre2 			= req.body.nombre2,
		apellido1 			= req.body.apellido1,
		apellido2 			= req.body.apellido2, 
		acudiente_cedula 	= req.body.acudiente_cedula,
		sexo 				= req.body.sexo,
		grado 				= req.body.grado,
		grupo 				= req.body.grupo,
		direccion 			= req.body.direccion, 
		f_nacimiento 		= req.body.f_nacimiento,
		ti 		 			= req.body.ti

		if ( nombre1 && nombre2 && apellido1 && apellido2 && acudiente_cedula && sexo && direccion && grupo && grado && ti && f_nacimiento ){
			validarSalon(grado_grupo, grado, grupo)
			.then(existe=>{
				if (existe){
					estudiantes.exists({ti: ti}, function(err, existe){
						if (err){
							throw (err)
						} else {
							if (existe){
								res.send({ existe: existe })
							} else {
								estudiantes.create({
									ti  					: ti,
									nombre1 				: nombre1,
									nombre2 				: nombre2,
									apellido1 				: apellido1,
									apellido2 				: apellido2,
									direccion 				: direccion,
									sexo 	 				: sexo,
									grado 					: grado,
									grupo 					: grupo,
									f_nacimiento			: f_nacimiento,
									acudiente_cedula 		: acudiente_cedula
								}, function(err, nuevoEstudiante){
									if (err){
										throw (err)
									} else {
										res.send({ nuevoEstudiante: nuevoEstudiante })
									}
								} )
							}
						}
					})
				} else {
					res.send({ noExisteSalon: true })
				}
			})
		} else {
			console.log('no estan llegando los datos')
		}
	}
}

module.exports = nuevoEstudianteController