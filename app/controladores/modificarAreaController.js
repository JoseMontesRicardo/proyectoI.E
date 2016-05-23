var modificarAreaController = function(areas){

	return function(req, res){
		var areaRecibida = req.body

		areas.get( areaRecibida.codigo, function(err, area){
			if (err){
				throw (err)
			} else {
				if ( area ){
					areadb = {
					codigo 	: area.codigo,
					nombre 	: area.nombre

				}
				
				if ( areadb.codigo === areaRecibida.codigo && areadb.nombre === areaRecibida.nombre){
					res.send({ modifico: false })
				} else {
					area.save(areaRecibida, function(err){
						if (err){
							throw (err)
						} else {
							res.send({ modifico: true })
						}
					})
				}
				}
			}
		})
	}
}
	module.exports = modificarAreaController