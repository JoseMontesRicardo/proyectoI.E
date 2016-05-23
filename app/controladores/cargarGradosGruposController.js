var cargarGradosGruposController = function(grados, grupos){

	var obtenerGrados = function(){
		return new Promise(function(resolve, reject){
			grados.find({}, function(err, grado){
				if (err){
					throw (err)
				} else {
					resolve(grado)
				}
			})
		})
	}

	var obtenerGrupos = function(req, res, grado){
			grupos.find({}, function(err, grupo){
				if (err){
					throw (err)
				} else {
					res.send({grupo: grupo, grado: grado})
				}
			})
	}
	return function(req, res){
		obtenerGrados()
		.then( grado => obtenerGrupos(req, res, grado) )
	}
}

module.exports = cargarGradosGruposController