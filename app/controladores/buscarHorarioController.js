var buscarHorarioController = function(horarios){
	return function(req, res){
		var buscador = req.body.buscador

		horarios.find( { idhorario : buscador }, function(err, horario){
			if (err){
				throw (err)
			} else {
				res.send({horario: horario})
			}
		})
	}
}

module.exports = buscarHorarioController