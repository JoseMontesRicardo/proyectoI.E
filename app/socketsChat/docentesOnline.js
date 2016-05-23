
var docentesOnline = (socket, db)=>{
	if ( socket.handshake.session.objsesion.nivel === 3 ){
		usuarios.find({ rol: 2, estado: 'online' }, (err, result)=>{
			if (err){
				throw (err)
			} else {
				socket.emit('docentesConectados', { docentesConectados: result})
			}
		})
	}
}

module.exports = docentesOnline