
var buscarEstudianteController = function(estudiantes){
	return function(req, res){
		var buscador = req.body.buscador

		estudiantes.find( { ti : buscador }, function(err, estudiante){
			if (err){
				throw (err)
			} else {
				res.send({estudiante: estudiante})
			}
		})
	}
}

module.exports = buscarEstudianteController