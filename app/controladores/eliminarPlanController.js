var eliminarPlanController = (grado_asignatura) => {
	return (req, res)=>{
		var asignatura = req.body.asignatura,
			grado = req.body.grado

		var planEliminar = {
			
			asignatura_idasignatura 	: asignatura,
			grado_idgrado 	      : grado
		}

		grado_asignatura.find(planEliminar, (err, planes) => {
			if (err){
				throw (err)
			} else {
				if (planes){
					planes[0].remove(function(err, eliminado){
						if (err){
							throw (err)
						} else {
							console.log('Plan académico eliminado')
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

module.exports = eliminarPlanController