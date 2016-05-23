
var verificarPadreController = (acudientes)=>{
	return (req, res)=>{
		var cedula = req.body.cedula
		if (cedula){
			acudientes.exists({usuario_cedula: cedula}, (err, existe) => {
				if (err){
					throw (err)
				} else {
					res.send({ existe: existe })
				}
			})
		} else {
			console.log('no esta llegando los datos')
		}
	}
}

module.exports = verificarPadreController