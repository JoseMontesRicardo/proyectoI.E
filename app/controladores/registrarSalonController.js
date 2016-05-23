

var registrarSalonController = (grado_grupo)=>{
	return (req, res)=>{
		var grado = req.body.grados,
		grupo = req.body.grupos

		var agregarSalon = (grado, grupo) => {
			return new Promise((resolve, reject) => {
				grado_grupo.create({
					grado_idgrado 	: grado,
					grupo_idgrupo 	: grupo
				}, (err, nuevoSalon) => {
					if (err){
						throw (err)
					} else {
						resolve(nuevoSalon)
					}
				})
			})
		}

		var verificarSalon = (grado, grupo) => {
			var nuevoSalon = { 
					grado_idgrado: grado,
					grupo_idgrupo: grupo
				}
			return new Promise ( (resolve, reject) => {
				grado_grupo.exists( nuevoSalon, (err, existe) => {
					if (err){
						throw (err)
					} else {
						resolve(existe)
					}
				})
			} )
		}

		if ( grupo && grado ){
			verificarSalon(grado, grupo)
			.then(existe => {
				if (!existe){
					agregarSalon(grado, grupo)
					.then(nuevoSalon => {
						console.log('nuevo salon agregado')
						res.send( {nuevoSalon: true} )
					})
				} else {
					res.send( {nuevoSalon: false} )
				}
			})
		} else {
			console.log('no estan llegando datos')
		}
	}
}

module.exports = registrarSalonController