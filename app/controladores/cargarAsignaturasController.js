var cargarAsignaturasController = function (asignaturas){
	return function(req,res){
		asignaturas.find({} , function (err, asignatura){
		if(err){
			throw (err)
		}else{
			res.send({asignatura : asignatura})
		}

	})	
	}
	
}

module.exports = cargarAsignaturasController

