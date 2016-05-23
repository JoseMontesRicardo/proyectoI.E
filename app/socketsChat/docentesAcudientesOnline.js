var docentesAcudientesOnline = (socket, usuario)=>{
	if ( socket.handshake.session.objsesion.nivel === 2 ){
		usuarios.find({ rol: [2,3], estado: 'online' }, (err, result)=>{
			if (err){
				throw (err)
			} else {
				socket.emit('usuariosConectados', { usuariosConectados: result})
			}
		})
	}
}
module.exports = docentesAcudientesOnline