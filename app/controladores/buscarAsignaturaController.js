
var buscarAsignaturaController = function(asignaturas){
	return function(req, res){
		var buscador = req.body.buscador

		asignaturas.find( { idasignatura : buscador }, function(err, asignatura){
			if (err){
				throw (err)
			} else {
				res.send({asignatura: asignatura})
			}
		})
	}
}

module.exports = buscarAsignaturaController   