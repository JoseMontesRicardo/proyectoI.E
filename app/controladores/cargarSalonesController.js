

var cargarSalonesController = (grado_grupo) => {
	return (req, res)=>{
		grado_grupo.find({}, (err, salones) => {
			if (err){
				throw (err)
			} else {
				res.send( {salones: salones} )
			}
		})
	}
}

module.exports = cargarSalonesController