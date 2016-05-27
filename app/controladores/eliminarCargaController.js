var eliminarCargaController = (carga_academica) => {
	return (req, res)=>{
		var asignatura = req.body.asignatura,
			cedula = req.body.cedula

		var cargaEliminar = {
			
			idasignatura 	: asignatura,
			docente_cedula 	 : cedula
		}

		carga_academica.find(cargaEliminar, (err, cargas) => {
			if (err){
				throw (err)
			} else {
				if (cargas){
					cargas[0].remove(function(err, eliminado){
						if (err){
							throw (err)
						} else {
							console.log('Carga académica eliminada')
							res.send({ eliminado: true })
						}
					})
				} else {
					console.log('NOOOOOOOOOOOOOOOOOOOOOOOOO')
				}
			}
		})
	}
}

module.exports = eliminarCargaController