var validarAsignatura = require('../librerias/validarAsignatura.js')


var nuevaAsignaturaController = function(asignaturas){
	return function(req, res){
		var idasignatura 	= req.body.idAsignatura,
			nombre 			= req.body.nombre,
			codigoArea 		= req.body.codigoArea

		if ( idasignatura && nombre && codigoArea ){
			validarAsignatura(asignaturas, idasignatura, nombre, codigoArea)
			.then(existe=>{
				if (existe){
					res.send({existe: true})
				} else {
					asignaturas.create({
						idasignatura 	: idasignatura,
						nombre 			: nombre,
						area_codigo 	: codigoArea
					}, function(err, nuevaAsignatura){
						if (err){
							throw (err)
						} else {
							res.send({ nuevaAsignatura: nuevaAsignatura })
						}
					})
						}
					})
		} else {
			console.log('no estan llegando los datos')
		}
	}
}

module.exports = nuevaAsignaturaController