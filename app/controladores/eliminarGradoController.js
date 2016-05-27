var eliminarGradoController = (grado) => {
	return (req, res)=>{
		var idgrado = req.body.idgrado

		var gradoEliminar = {
			idgrado 	: idgrado
		}

		grado.find( gradoEliminar, (err, grados) => {
			if (err){
				throw (err)
			} else {
				if (grados){
					grados[0].remove(function(err, eliminado){
						if (err){
							throw (err)
						} else {
							console.log('Grado eliminado')
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

module.exports = eliminarGradoController