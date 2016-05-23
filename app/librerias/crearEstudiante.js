
var crearEstudiante = (estudiantes, ti, nombre1, nombre2, apellido1, apellido2, direccion, sexo, grado, grupo, f_nacimiento, acudiente_cedula)=>{
	return new Promise(function(resolve, reject){
		estudiantes.create({
			ti  				: ti,
			nombre1 			: nombre1,
			nombre2 			: nombre2,
			apellido1 			: apellido1,
			apellido2 			: apellido2,
			direccion 			: direccion,
			sexo 	 			: sexo,
			grado 				: grado,
			grupo 				: grupo,
			f_nacimiento		: f_nacimiento,
			acudiente_cedula 	: acudiente_cedula
		}, function(err, nuevoEstudiante){
			if (err){
				throw (err)
			} else {
				resolve(nuevoEstudiante)
			}
		})

	})
}

module.exports = crearEstudiante