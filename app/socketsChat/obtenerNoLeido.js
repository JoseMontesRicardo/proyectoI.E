obtenerNoLeido = (socket,db)=>{
	var cedula = socket.handshake.session.objsesion.cedula
	socket.on('noLeidos', (data)=>{
		db.driver.execQuery(`select usuario.nombre1,usuario.apellido1 ,mensajes.emisor, mensajes.receptor, mensajes.mensaje, mensajes.leido 
								from usuario 
								INNER JOIN mensajes 
									on ( usuario.cedula = mensajes.emisor ) 
								WHERE ( mensajes.leido = 0 and mensajes.receptor = ${cedula}) 
								GROUP BY mensajes.emisor`,
							( err, res )=>{
								if ( err ){
									throw (err)
								}else{
									socket.emit('noLeidos', {noLeidos: res})
								}
							})
	})

}

module.exports = obtenerNoLeido