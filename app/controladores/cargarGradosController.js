
var cargarGradosController = (grado) => {
	return (req, res)=>{
		grado.find({}, (err, grados) => {
			if (err){
				throw (err)
			} else {
				res.send( {grados: grados} )
			}
		})
	}
}

module.exports = cargarGradosController