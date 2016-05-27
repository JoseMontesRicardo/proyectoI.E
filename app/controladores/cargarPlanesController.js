
var cargarPlanesController = (grado_asignatura) => {
	return (req, res)=>{
		grado_asignatura.find({}, (err, planes) => {
			if (err){
				throw (err)
			} else {
				res.send( {planes: planes} )
			}
		})
	}
}

module.exports = cargarPlanesController