var _ = require('underscore')

var getAsignaturasController = (db)=>{
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
	
		var obtenerAsignatura = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select asignatura.nombre, asignatura.idasignatura from asignatura
				INNER JOIN grado_asignatura
				ON ( grado_asignatura.asignatura_idasignatura = asignatura.idasignatura)
				where ( grado_asignatura.grado_idgrado = ${alumno.grado})`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							
							resolve(result)
						}
					})
			} )
		}
		obtenerAsignatura()
		.then( result => {
			res.send( { asignatura : result } )
		} )
	}
}


module.exports = getAsignaturasController