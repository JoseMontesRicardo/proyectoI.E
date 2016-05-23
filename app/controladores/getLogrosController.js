var _ = require('underscore')

var getLogrosController = (db)=>{
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
	
		var obtenerLogro = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select logro.nombre, informe_logro.nota, informe_logro.observacion from informe_logro
				INNER JOIN logro 
				ON ( logro.idlogro = informe_logro.logro_idlogro)
				INNER JOIN informe
				ON ( informe_logro.informe_idinforme = informe.idinforme)
				where ( informe.estudiante_ti = ${alumno.ti})`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							console.log(result)
							resolve(result)
						}
					})
			} )
		}
		obtenerLogro()
		.then( result => {
			res.send( { logro : result } )
		} )
	}
}


module.exports = getLogrosController