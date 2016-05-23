var eliminarSalonController = (grado_grupo) => {
	return (req, res)=>{
		var grado = req.body.grado,
			grupo = req.body.grupo

		var salonEliminar = {
			grado_idgrado 	: grado,
			grupo_idgrupo 	: grupo
		}

		grado_grupo.find(salonEliminar, (err, salones) => {
			if (err){
				throw (err)
			} else {
				if (salones){
					salones[0].remove(function(err, eliminado){
						if (err){
							throw (err)
						} else {
							console.log('salon eliminado')
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

module.exports = eliminarSalonController