var nuevoHorario = (horarios, codigo, jornada, dia, hora, entrada, grado, grupo, idasignatura,  cedula)=>{
	return new Promise((resolve, reject)=>{
		horarios.create({
			idhorario : codigo,
			jornada : jornada,
			dia : dia,
			hora : hora,
			entrada : entrada,
			grado: grado,
			grupo: grupo,
			idasignatura 	: idasignatura,
			docente_cedula	: cedula
			
		}, (err, nuevo)=>{
			if (err){
				throw (err)
			} else {
				resolve(nuevo)
			}
		})
	})
}

module.exports = nuevoHorario