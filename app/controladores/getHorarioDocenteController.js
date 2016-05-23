var _ = require('underscore')

var getHorarioDocenteController = (db)=>{
	return (req, res)=>{

		var cedula = req.session.objsesion.cedula
		


		var obtenerLunes = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`SELECT horario.jornada, horario.hora,horario.grado, 
					horario.grupo, asignatura.nombre, horario.entrada 
					from horario
					inner join asignatura on ( horario.idasignatura = asignatura.idasignatura)
					where ( horario.docente_cedula = ${ cedula } and dia = 'lunes' ) order by entrada asc`, (err, result)=>{
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
				db.driver.execQuery(`SELECT horario.jornada, horario.hora,horario.grado, 
					horario.grupo, asignatura.nombre, horario.entrada 
					from horario
					inner join asignatura on ( horario.idasignatura = asignatura.idasignatura)
					where ( horario.docente_cedula = ${ cedula } and dia = 'martes' ) order by entrada asc`, (err, result)=>{
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
				db.driver.execQuery(`SELECT horario.jornada, horario.hora,horario.grado, 
					horario.grupo, asignatura.nombre, horario.entrada 
					from horario
					inner join asignatura on ( horario.idasignatura = asignatura.idasignatura)
					where ( horario.docente_cedula = ${ cedula } and dia = 'miercoles' ) order by entrada asc`, (err, result)=>{
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
				db.driver.execQuery(`SELECT horario.jornada, horario.hora,horario.grado, 
					horario.grupo, asignatura.nombre, horario.entrada 
					from horario
					inner join asignatura on ( horario.idasignatura = asignatura.idasignatura)
					where ( horario.docente_cedula = ${ cedula } and dia = 'jueves' ) order by entrada asc`, (err, result)=>{
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
				db.driver.execQuery(`SELECT horario.jornada, horario.hora,horario.grado, 
					horario.grupo, asignatura.nombre, horario.entrada 
					from horario
					inner join asignatura on ( horario.idasignatura = asignatura.idasignatura)
					where ( horario.docente_cedula = ${ cedula } and dia = 'viernes' ) order by entrada asc`, (err, result)=>{
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

module.exports = getHorarioDocenteController