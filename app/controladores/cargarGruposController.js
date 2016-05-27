
var cargarGruposController = (grupo) => {
	return (req, res)=>{
		grupo.find({}, (err, grupos) => {
			if (err){
				throw (err)
			} else {
				res.send( {grupos: grupos} )
			}
		})
	}
}

module.exports = cargarGruposController