var registrarGrupoController = function(grupos){
	return function(req, res){
		grupoRecibido = req.body.grupo
		grupos.exists({ idgrupo: grupoRecibido }, function(err, existe){
			if (err){
				throw (err)
			} else {
				if (existe){
					res.send({ existe: existe })
				} else {
					grupos.create({
						idgrupo: grupoRecibido
					}, function(err, grupoRegistrado){
						if (err){
							throw (err)
						} else {
							res.send({ grupoRegistrado: grupoRegistrado })
						}
					})
				}
			}
		})
	}
}

module.exports = registrarGrupoController