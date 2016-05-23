var _ = require('underscore')

var getDatosDocenteController = (db)=>{
	return (req, res)=>{
		
	var cedula = req.session.objsesion.cedula
	
		var obtenerInfo = ()=>{
			return new Promise( (resolve, reject)=>{
				db.driver.execQuery(`select * from usuario
				where ( usuario.cedula = ${ cedula } )`, (err, result)=>{
						if ( err ){
							throw (err)
						} else {
							console.log(result)
							resolve(result)
						}
					})
			} )
		}
		obtenerInfo()
		.then( result => {
			res.send( { info : result } )
		} )
	}
}


module.exports = getDatosDocenteController