
var emitirDocenteConectado = (socket, usuarios)=>{
	if ( socket.handshake.session.objsesion.nivel === 2 ){
		usuarios.find({ cedula: socket.handshake.session.objsesion.cedula }, (err, result)=>{
			if (err){
				throw (err)
			} else {	
				usuario = result[0]
				socket.broadcast.emit('avisoDocenteConectado', { docente: usuario })
			}
		})
	}
}

module.exports = emitirDocenteConectado