
var cargarCargasController = (carga_academica) => {
	return (req, res)=>{
		carga_academica.find({}, (err, cargas) => {
			if (err){
				throw (err)
			} else {
				res.send( {cargas: cargas} )
			}
		})
	}
}

module.exports = cargarCargasController