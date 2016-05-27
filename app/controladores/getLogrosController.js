var _ = require('underscore')

var getLogrosController = (db)=>{
	return (req, res)=>{
	var ti,
		idasignatura 	= req.body.idasignatura,
		periodo 		= req.body.periodo	

		req.session.objsesion.hijos.forEach( function(element, index) {
			if (element.selected === true){
				ti = element.ti
				console.log(ti)
			} 
		})
	
		var obtenerLogro = (ti)=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select logro.nombre, informe_logro.nota, informe_logro.observacion from informe_logro
				INNER JOIN logro 
				ON ( logro.idlogro = informe_logro.logro_idlogro)
				INNER JOIN informe
				ON ( informe_logro.informe_idinforme = informe.idinforme)
				where ( informe.estudiante_ti = '${ti}' and logro.idasignatura = ${idasignatura} and logro.periodo = '${periodo}' )`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							console.log(result)
							resolve(result)
						}
					})
			} )
		}
		obtenerLogro(ti)
		.then( result => {
			res.send( { logro : result } )
		} )
		.catch(err=>console.log(err))
	}
}


module.exports = getLogrosController