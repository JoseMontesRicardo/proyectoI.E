var buscarAreaController = function(areas){
	return function(req, res){
		var buscador = req.body.buscador

		areas.find( { codigo : buscador }, function(err, area){
			if (err){
				throw (err)
			} else {
				res.send({area: area})
			}
		})
	}
}

module.exports = buscarAreaController