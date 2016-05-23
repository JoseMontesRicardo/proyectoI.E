var AdministradorController = function (grados){
	return function(req,res){
		grados.find({}, function(err, grado){
			if (err){
				throw (err)
			} else {
				res.render('administrador', { grado: grado })
			}
		})	
	}
}

module.exports = AdministradorController