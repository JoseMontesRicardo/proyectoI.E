
var registrarAreaController = function(areas){
	return function(req, res){
		var codigo = req.body.codigo,
			nombre = req.body.nombre

		if ( codigo && nombre){

			areas.exists({ codigo: codigo }, function(err, existe){
			if (err){
				throw (err)
			} else {
				if (existe){
					res.send({ existe: existe })
				} else {
					areas.create({
						codigo : codigo,
						nombre : nombre

					}, function(err, registrarArea){
						if (err){
							throw (err)
						} else {
							res.send({ registrarArea: registrarArea })
						}
					})
				}
			}
			})

		}

		
	}
}

module.exports = registrarAreaController