var _ = require('underscore')

var getHorarioController = (db)=>{
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
	
		var obtenerLunes = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select asignatura.nombre, horario.hora, grado, grupo, horario.entrada 
					from horario 
					INNER JOIN asignatura ON ( horario.idasignatura = asignatura.idasignatura ) 
					where ( grado = ${alumno.grado} and grupo = ${alumno.grupo} and dia = 'lunes'  ) order by entrada asc`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							resolve(result)
						}
					})
			} )
		}

		var obtenerMartes = ( lunes )=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select asignatura.nombre, horario.hora, grado, grupo, horario.entrada 
					from horario 
					INNER JOIN asignatura ON ( horario.idasignatura = asignatura.idasignatura ) 
					where ( grado = ${alumno.grado} and grupo = ${alumno.grupo} and dia = 'martes'  ) order by entrada asc`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							array = { lunes: lunes, martes: result }
							resolve(array)
						}
					})
			} )
		}

		var obtenerMiercoles = ( array )=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select asignatura.nombre, horario.hora, grado, grupo, horario.entrada 
					from horario 
					INNER JOIN asignatura ON ( horario.idasignatura = asignatura.idasignatura ) 
					where ( grado = ${alumno.grado} and grupo = ${alumno.grupo} and dia = 'miercoles'  ) order by entrada asc`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							arrayResult = { lunes: array.lunes, martes: array.martes, miercoles: result }
							resolve(arrayResult)
						}
					})
			} )
		}

		var obtenerJueves = ( array )=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select asignatura.nombre, horario.hora, grado, grupo, horario.entrada 
					from horario 
					INNER JOIN asignatura ON ( horario.idasignatura = asignatura.idasignatura ) 
					where ( grado = ${alumno.grado} and grupo = ${alumno.grupo} and dia = 'jueves'  ) order by entrada asc`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							arrayResult = { lunes: array.lunes, martes: array.martes, miercoles: array.miercoles, jueves: result }
							resolve(arrayResult)
						}
					})
			} )
		}

		var obtenerViernes = ( array )=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select asignatura.nombre, horario.hora, grado, grupo, horario.entrada 
					from horario 
					INNER JOIN asignatura ON ( horario.idasignatura = asignatura.idasignatura ) 
					where ( grado = ${alumno.grado} and grupo = ${alumno.grupo} and dia = 'viernes'  ) order by entrada asc`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							arrayResult = { lunes: array.lunes, martes: array.martes, miercoles: array.miercoles, jueves: array.jueves, viernes: result }
							resolve(arrayResult)
						}
					})
			} )
		}

		obtenerLunes()
		.then( result => {
			obtenerMartes(result)
			.then( array => {
				obtenerMiercoles(array)
				.then( array => {
					obtenerJueves(array)
					.then( array => {
						obtenerViernes(array)
						.then( array => {
							res.send( { lunes: array.lunes, martes: array.martes, miercoles: array.miercoles, jueves: array.jueves, viernes: array.viernes } )
						} )
					})
				} )
			})
		} )

	}
}

module.exports = getHorarioController