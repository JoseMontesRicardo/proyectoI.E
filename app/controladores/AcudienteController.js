var AcudienteController = function (req, res){

	estudiantes.find({acudiente_cedula: req.session.objsesion.cedula}, function(err, hijos){
		if (err){
			throw (err)
		} else {
			req.session.objsesion.hijos = hijos
		}
		res.render('acudiente', { objsesion: req.session.objsesion })
	})
}

module.exports = AcudienteController