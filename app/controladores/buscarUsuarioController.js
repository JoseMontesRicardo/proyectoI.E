
var buscarUsuarioController = function(usuarios){
	return function(req, res){
		var buscador = req.body.buscador

		usuarios.find( { cedula: buscador }, function(err, usuario){
			if (err){
				throw (err)
			} else {
				res.send({usuario: usuario})
			}
		})
	}
}

module.exports = buscarUsuarioController