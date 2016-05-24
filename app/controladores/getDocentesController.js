var _ = require('underscore')

var getDocentesController = (db)=>{
	return (req, res)=>{
		
		var ti = req.body.ti,
			alumno = {}


		req.session.objsesion.hijos.forEach( function(element, index) {
			if (element.ti === ti.toString()){
				element.selected 	= true
				alumno 				= element
			} else {
				element.selected = false
			}
		})
	
		var obtenerDocente = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select usuario.nombre1, nombre2, apellido1, apellido2, asignatura.nombre from usuario 
				INNER JOIN horario
				ON ( usuario.cedula = horario.docente_cedula )
				INNER JOIN asignatura
				ON ( asignatura.idasignatura = horario.idasignatura )
				WHERE (grado = ${alumno.grado} and grupo = ${alumno.grupo})
				GROUP BY usuario.nombre1, nombre2, apellido1, apellido2, asignatura.nombre, grado, grupo, horario.idasignatura`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							
							resolve(result)
						}
					})
			} )
		}
		obtenerDocente()
		.then( result => {
			res.send( { docente : result } )
		} )
	}
}


module.exports = getDocentesController