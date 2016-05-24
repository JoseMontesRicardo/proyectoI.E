avisarEscritura = (socket, io,redisClient)=>{
	socket.on('avisarEscritura', (data)=>{
		var cedulaReceptor 	= data.cedulaReceptor,
			socks 			= io.sockets,
			cedulaAvisar 	= socket.handshake.session.objsesion.cedula


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

		getSocketId(cedulaReceptor)
		.then( socketId => {
			for (i in socks){
				if ( socks[i].id === socketId ){
					socks[i].emit('escribiendo', { cedula: cedulaAvisar })
				}
			}
		} )
	})
}

module.exports = avisarEscritura