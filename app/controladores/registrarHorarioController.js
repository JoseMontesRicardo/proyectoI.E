var validarDocente 			= require('../librerias/validarDocente.js'),
	validarHorario		 	= require('../librerias/validarHorario.js'),
	nuevoHorario		 	= require('../librerias/nuevoHorario.js')

var registrarHorarioController = (horarios, docentes)=>{
	return (req, res)=>{
		var codigo			= req.body.idhorario,
			jornada			= req.body.jornada,
			dia 			= req.body.dia,
			hora 			= req.body.hora,
			grado			= req.body.grado,
			idasignatura 	= req.body.idasignatura,
			grupo			= req.body.grupo,
			cedula 			= req.body.cedula,
			entrada 		= ''

		if ( codigo && jornada && dia && hora && grado && grupo && idasignatura && cedula ){
			validarDocente(docentes, cedula)
			.then(existeDocente =>{
				if (existeDocente){
					validarHorario(horarios, codigo, jornada, dia, hora, grado,  grupo, idasignatura, cedula)
					.then(existe=>{
						if (existe){
							res.send({existeHorario: true})
						} else {
							if ( hora === '6:30am-7:30am' ){
								entrada = '6:30'
							} else if ( hora === '7:30am-8:00am' ) {
								entrada = '7:30'
							} else if ( hora === '8:00am-9:00am' ) {
								entrada = '8:30'
							} else if ( hora === '9:30am-10:30am' ) {
								entrada = '9:30'
							} else if ( hora === '10:30am-11:30am' ) {
								entrada = '10:30'
							} else if ( hora === '11:30am-12:30pm' ) {
								entrada = '11:30'
							}
							nuevoHorario(horarios, codigo, jornada, dia, hora, entrada, grado, grupo, idasignatura, cedula)
							.then(nuevo=> res.send({nuevoHorario: nuevo}))
							.catch(err => {throw (err)})
						}
					})
				} else {
					res.send({ noExisteDocente: true })
				}
			})
			.catch(err=> console.log(err))
		} else {
			console.log('no estan llegando los datos')
		}
	}
}

module.exports = registrarHorarioController
