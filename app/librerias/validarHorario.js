var validarHorario = (horarios, codigo, jornada, dia, hora, grado, grupo, asignatura,  cedula)=>{
	return new Promise((resolve, reject)=>{
		horarios.exists({ 

			idhorario : codigo,
			jornada : jornada,
			dia : dia,
			hora : hora,
			grado: grado,
			grupo: grupo,
			idasignatura 	: asignatura,
			docente_cedula	: cedula
		},
		(err, existe)=>{
			if (err){
				throw (err)
			} else {
				resolve(existe)
			}
		})
	})
}

module.exports = validarHorario