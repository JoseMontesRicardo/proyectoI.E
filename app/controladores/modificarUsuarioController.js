var modificarUsuarioController = function(usuarios){

	return function(req, res){
		var usuarioRecibido = req.body

		usuarios.get( usuarioRecibido.cedula, function(err, usuario){
			if (err){
				throw (err)
			} else {
				if ( usuario ){
					usuariodb = {
					cedula 		: usuario.cedula,
					nombre1 	: usuario.nombre1,
					nombre2 	: usuario.nombre2,
					apellido1 	: usuario.apellido1,
					apellido2 	: usuario.apellido2,
					password 	: usuario.password,
					direccion 	: usuario.direccion,
					email 		: usuario.email,
					telefono 	: parseInt(usuario.telefono, 10),
					sexo 		: usuario.sexo,
					rol 		: usuario.rol

				}
				// console.log(usuariodb)
				// console.log(usuarioRecibido)
				if ( usuariodb.cedula === usuarioRecibido.cedula && usuariodb.nombre1 === usuarioRecibido.nombre1 && usuariodb.nombre2 === usuarioRecibido.nombre2 && usuariodb.apellido1 === usuarioRecibido.apellido1  && usuariodb.apellido2 === usuarioRecibido.apellido2 && usuariodb.direccion === usuarioRecibido.direccion && usuariodb.password === usuarioRecibido.password && usuariodb.email === usuarioRecibido.email && usuariodb.sexo === usuarioRecibido.sexo && usuariodb.telefono === usuarioRecibido.telefono && usuariodb.rol === usuarioRecibido.rol ){
					res.send({ modifico: false })
				} else {
					usuario.save(usuarioRecibido, function(err){
						if (err){
							throw (err)
						} else {
							res.send({ modifico: true })
						}
					})
				}
				}
			}
		} )
	}
}
	module.exports = modificarUsuarioController