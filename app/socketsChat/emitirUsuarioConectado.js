var emitirUsuarioConectado = (socket, usuarios)=>{
	if ( socket.handshake.session.objsesion.nivel === 3 ){
		usuarios.find({ cedula: socket.handshake.session.objsesion.cedula }, (err, result)=>{
			if (err){
				throw (err)
			} else {	
				usuario = result[0]
				socket.broadcast.emit('avisoUsuarioConectado', { usuario: usuario })
			}
		})
	}
}

module.exports = emitirUsuarioConectado