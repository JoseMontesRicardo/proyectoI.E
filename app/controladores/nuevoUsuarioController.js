
var nuevoUsuarioController = function(usuarios, acudientes, docentes){
	return function(req, res){
		var nombre1 	= req.body.nombre1,
			nombre2 	= req.body.nombre2,
			cedula 		= req.body.cedula,
			apellido1 	= req.body.apellido1,
			apellido2 	= req.body.apellido2,
			sexo 		= req.body.sexo,
			direccion 	= req.body.direccion,
			tipo 		= req.body.tipo,
			correo 		= req.body.correo,
			telefono 	= req.body.telefono

			if ( nombre1 && nombre2 && cedula && apellido1 && apellido2 && sexo && direccion && tipo && correo && telefono ){
				usuarios.exists({ cedula: cedula }, function(err, existe){
					if (err){
						throw (err)
					} else {
						if ( existe ){
							res.send({ existe: existe })
						} else {
							usuarios.create({ 
								nombre1 	: nombre1,
								nombre2 	: nombre2,
								cedula 		: cedula,
								apellido1 	: apellido1,
								apellido2 	: apellido2,
								sexo 		: sexo,
								password 	: '123456',
								direccion 	: direccion,
								rol 		: tipo,
								estado 		: 0,
								email 		: correo,
								telefono 	: telefono
							}, function (err, usuario){
								if ( err ){
									throw (err)
								} else {
									// si es administrador se agrega la cedula a la tabla administrador
									if ( tipo == 3 ){
										acudientes.create({ 
											usuario_cedula 	: cedula
										}, function (err, acudiente){
											if ( err ){
												throw (err)
											} else {
												console.log(acudiente)
											}
										})
									} else if ( tipo == 2 ){
										docentes.create({ 
											usuario_cedula 	: cedula
										}, function (err, docente){
											if ( err ){
												throw (err)
											} else {
												console.log(docente)
											}
										})
										acudientes.create({ 
											usuario_cedula 	: cedula
										}, function (err, acudiente){
											if ( err ){
												throw (err)
											} else {
												console.log(acudiente)
											}
										})
									} 
									res.send( {  usuario: usuario } )
								}
							})
						}
					}
				})
			} else {
				throw ('se rompio')
			}
	}
}

module.exports = nuevoUsuarioController