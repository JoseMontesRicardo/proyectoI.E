
var registrarGradoController = function(grados){
	return function(req, res){
		gradoRecibido = req.body.grado
		grados.exists({ idgrado: gradoRecibido }, function(err, existe){
			if (err){
				throw (err)
			} else {
				if (existe){
					res.send({ existe: existe })
				} else {
					grados.create({
						idgrado: gradoRecibido
					}, function(err, gradoRegistrdo){
						if (err){
							throw (err)
						} else {
							res.send({ gradoRegistrado: gradoRegistrdo })
						}
					})
				}
			}
		})
	}
}

module.exports = registrarGradoController