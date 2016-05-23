var existeEstudianteController 	= require('./existeEstudianteController.js'),
	crearEstudiante 			= require('../librerias/crearEstudiante.js'),
	validarSalon 				= require('../librerias/validarSalon.js')

var agregarHijoPadreController = (estudiantes, grado_grupo)=>{
	return (req, res)=>{
		
		var nombre1 	= req.body.nombre1,
			nombre2 	= req.body.nombre2,
			apellido1 	= req.body.apellido1,
			apellido2 	= req.body.apellido2,
			grupo	 	= req.body.grupo,
			sexo 		= req.body.sexo,
			grado 		= req.body.grado,
			direccion 	= req.body.direccion,
			nacimiento 	= req.body.nacimiento,
			ti 		 	= req.body.ti,
			cedula 		= req.session.objsesion.cedula

			console.log(cedula)
			if ( req.session.objsesion ){
				validarSalon(grado_grupo, grado, grupo)
				.then(existe=>{
					if (existe){
						existeEstudianteController(estudiantes, ti)
						.then((existe)=>{
							if ( existe ){
								res.send({ existe: true })
							} else {
								crearEstudiante(estudiantes,ti, nombre1, nombre2, apellido1, apellido2, direccion, sexo, grado, grupo, nacimiento, cedula)
								.then( nuevoEstudiante => res.send( { nuevoEstudiante: nuevoEstudiante }) )
								.catch(err=> {throw  (err)})
							}
						})
					} else {
						res.send({noExisteSalon: true})
					}
				})
			} else {
				res.redirect('/loggin')
			}
	}
}

module.exports = agregarHijoPadreController