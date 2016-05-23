var buscarLogroController = function(logros){
	return function(req, res){
		var buscador = req.body.buscador

		logros.find( { idlogro : buscador }, function(err, logro){
			if (err){
				throw (err)
			} else {
				res.send({logro: logro})
			}
		})
	}
}

module.exports = buscarLogroController