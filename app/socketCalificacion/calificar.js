var validarInforme 	= require('../librerias/validarInforme.js'),
	crearInforme 	= require('../librerias/crearInforme.js'),
	colocarNota 	= require('../librerias/colocarNota.js'),
	verificarNota 	= require('../librerias/verificarNota.js')

var calificar = (socket, informe, informe_logro)=>{
	socket.on('calificar', (data)=>{
		var periodo 	= data.periodo,
			ti 			= data.ti,
			nota 		= data.nota,
			observacion = data.observacion,
			idlogro 	= data.idlogro

		validarInforme(informe, periodo, ti)
		.then( existe =>{
			if ( existe.length === 0 ){
				crearInforme(informe, periodo, ti)
				.then( nuevoInforme => {
					console.log('se creo el informe'+nuevoInforme.idinforme)
					colocarNota(informe_logro, nuevoInforme.idinforme, idlogro, nota, observacion)
					.then( nota => {
						if (nota){
							socket.emit('avisoCalificacion', { nota: nota })
						}
					})
				} )
			} else {
				console.log('no es necesario crear el informe'+existe[0].idinforme)
				verificarNota(informe_logro, existe[0].idinforme, idlogro)
				.then( calificacion => {
					if ( !calificacion ){
						colocarNota(informe_logro, existe[0].idinforme, idlogro, nota, observacion)
						.then( nota => {
							if (nota){
								socket.emit('avisoCalificacion', { nota: nota })
							}
						})
					} else {
						socket.emit('errorCalificacion', { nota: nota })
					}
				} )
			}
		} )
	})
}

module.exports = calificar