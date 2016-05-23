
var existeEstudianteController = (estudiantes, ti)=>{
	return new Promise((resolve, reject)=> {
		estudiantes.exists({ ti: ti }, function(err, existe){
		if ( err ){
			throw (err)
		} else {
			resolve(existe)
		}
	})
	})
}

module.exports = existeEstudianteController