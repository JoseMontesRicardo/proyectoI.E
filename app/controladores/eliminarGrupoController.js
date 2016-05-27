var eliminarGrupoController = (grupo) => {
	return (req, res)=>{
		var idgrupo = req.body.idgrupo

		var grupoEliminar = {
			idgrupo 	: idgrupo
		}

		grupo.find( grupoEliminar, (err, grupos) => {
			if (err){
				throw (err)
			} else {
				if (grupos){
					grupos[0].remove(function(err, eliminado){
						if (err){
							throw (err)
						} else {
							console.log('Grupo eliminado')
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

module.exports = eliminarGrupoController