var verificarRol = (socket)=>{
	socket.on('verificarRol', (data)=>{
		obj = data.obj
		socket.emit('verificarRol', {rol: socket.handshake.session.objsesion.nivel, usuario: obj})
	})
}

module.exports = verificarRol