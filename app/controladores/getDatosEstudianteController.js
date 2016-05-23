var _ = require('underscore')

var getDatosEstudianteController = (db)=>{
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
	
		var obtenerDatos = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select * from estudiante
				where ( ti = ${alumno.ti})`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							
							resolve(result)
						}
					})
			} )
		}
		obtenerDatos()
		.then( result => {
			res.send( { datos : result } )
		} )
	}
}


module.exports = getDatosEstudianteController