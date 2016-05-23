var validarAsignatura = function(asignaturas, idasignatura, nombre, area){
	return new Promise(function(resolve, reject){
		asignaturas.exists({ 
			idasignatura  			: idasignatura,
			nombre					: nombre,
			area_codigo				: area
		}, function(err, existe){
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		})
	})
}

module.exports = validarAsignatura