
var cargarAreasController = function (areas){
	return function(req,res){
		areas.find({} , function (err, area){
		if(err){
			throw (err)
		}else{
			res.send({area : area})
		}

	})	
	}
	
}

module.exports = cargarAreasController

