var AdministradorController = function (grados){
	return function(req,res){
		grados.find({}, function(err, grado){
			if (err){
				throw (err)
			} else {
				res.render('administrador', { objsesion: req.session.objsesion })
			}
		})	
	}
}

module.exports = AdministradorController