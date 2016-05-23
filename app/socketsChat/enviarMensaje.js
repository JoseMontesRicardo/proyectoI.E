
var enviarMensaje = (socket, io, redisClient, mensajes)=>{
	socket.on('enviarMensaje', (data)=>{
		var cedulaReceptor 	= data.cedulaReceptor,
			mensaje 		= data.mensaje,
			socks 			= io.sockets

		var saveMessage 	= ()=>{
			return new Promise( (resolve, reject)=>{
				mensajes.create({
					mensaje		: mensaje,
					emisor 		: socket.handshake.session.objsesion.cedula,
					receptor 	: cedulaReceptor,
					leido 		: 0
				}, (err, item)=>{
					if (err){
						throw (err)
					} else {
						resolve(item)
					}
				})
			} )
		}

		var getSocketId  = (cedula)=>{
			return new Promise( (resolve, reject)=>{
				redisClient.mget(cedula, (err, res)=>{
					if (err){
						throw (err)
					} else {
						resolve(res[0])
					}
				})
			} )
		}

		saveMessage()
		.then( nuevoMensaje => {
			getSocketId(cedulaReceptor)
			.then( socketId => {
				var enviado = false
				for (i in socks) {
					console.log(socks[i].id+'==='+socketId)
					if ( socks[i].id === socketId ){
						socks[i].emit('recibirMensaje', {mensaje: nuevoMensaje})
						socket.emit('enviarMensaje', {mensaje: nuevoMensaje})
						enviado = true
					}
				}
				if ( !enviado ){
					console.log('mensaje enviado')
					socket.emit('enviarMensaje', {mensaje: nuevoMensaje})
				}
			})
		} )

	})
}

module.exports = enviarMensaje