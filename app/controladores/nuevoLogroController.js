var registrarLogroController = function(logros){
	return function(req, res){
		var idlogro = req.body.idlogro,
			nombre = req.body.nombre,
			periodo = req.body.periodo,
			grado = req.body.grado,
			idasignatura = req.body.idasignatura

		if ( idlogro && nombre && periodo && grado && idasignatura){

			logros.exists({ idlogro: idlogro }, function(err, existe){
			if (err){
				throw (err)
			} else {
				if (existe){
					res.send({ existe: existe })
				} else {
					logros.create({
						idlogro : idlogro,
						nombre : nombre,
						periodo : periodo,
						grado : grado,
						idasignatura : idasignatura

					}, function(err, nuevoLogro){
						if (err){
							throw (err)
						} else {
							res.send({ nuevoLogro: nuevoLogro })
						}
					})
				}
			}
			})

		}

		
	}
}

module.exports = registrarLogroController