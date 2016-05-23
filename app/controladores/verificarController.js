var verificarUsuario = require('../librerias/verificarUsuario.js')


var verificarController = (usuarios)=>{
	return (req, res)=>{
		var usuario 	= req.body.usuario,
			contrasena 	= req.body.contrasena

		if ( usuario && contrasena ){
			verificarUsuario( usuarios, usuario, contrasena )
			.then( usuario => {
				if ( usuario.length !== 0 ){

					req.session.objsesion = {
						nombre 		: usuario[0].nombre1,
						apellido 	: usuario[0].apellido1,
						cedula 		: usuario[0].cedula,
						nivel 		: usuario[0].rol,
						hijos 		: [],
						socketId	: ''
					}
					if ( req.session.objsesion.nivel === 3  ){
						res.redirect('/acudiente')
					}
					if ( req.session.objsesion.nivel === 2  ){
						res.redirect('/docente')
					}
				} else {
					res.redirect('login')
				}
			} )
		} else {
			console.log('no estan llegando los datos')
		}
	}
}

module.exports = verificarController