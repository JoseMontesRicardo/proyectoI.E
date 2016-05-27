var validarHorario = (horarios, codigo, jornada, dia, hora, grado, grupo, asignatura,  cedula)=>{
	var cruzados = (jornada, dia, hora, grado, grupo)=>{
		return new Promise((resolve, reject)=>{
			horarios.exists({ 
				// idhorario : codigo,
				jornada : jornada,
				dia : dia,
				hora : hora,
				grado: grado,
				grupo: grupo,
				// idasignatura 	: asignatura,
				// docente_cedula	: cedula
			},
			(err, cruza)=>{
				if (err){
					throw (err)
				} else {
					resolve(cruza)
				}
			})
		})
	}
	var existe = (codigo)=>{
		return new Promise((resolve, reject)=>{
			horarios.exists({ 
				idhorario : codigo
				// jornada : jornada,
				// dia : dia,
				// hora : hora,
				// grado: grado,
				// grupo: grupo,
				// // idasignatura 	: asignatura,
				// // docente_cedula	: cedula
			},
			(err, exist)=>{
				if (err){
					throw (err)
				} else {
					resolve(exist)
				}
			})
		})
	}
	return new Promise((resolve, reject)=>{
		cruzados(jornada, dia, hora, grado, grupo)
		.then( cruza =>{
			existe(codigo)
			.then( exist => {
				var bool = false
				if ( cruza ){
					bool = true
				} if ( exist ){
					bool = true
				}
				console.log(bool)
				resolve(bool)
			} )
		} )
	})
}

module.exports = validarHorario