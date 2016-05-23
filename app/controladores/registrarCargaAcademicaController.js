var validarDocente 			= require('../librerias/validarDocente.js'),
	validarCargaAcademica 	= require('../librerias/validarCargaAcademica.js'),
	nuevaCargaAcademica 	= require('../librerias/nuevaCargaAcademica.js')

var registrarCargaAcademicaController = (carga_academica, docentes)=>{
	return (req, res)=>{
		var idasignatura 	= req.body.idasignatura,
			cedula 			= req.body.cedula

		if ( idasignatura && cedula ){
			validarDocente(docentes, cedula)
			.then(existeDocente =>{
				if (existeDocente){
					validarCargaAcademica(carga_academica, cedula, idasignatura)
					.then(existeCarga=>{
						if (existeCarga){
							res.send({existeCargaAcademica: true})
						} else {
							nuevaCargaAcademica(carga_academica, idasignatura, cedula)
							.then(nuevo=> res.send({nuevaCarga: nuevo}))
							.catch(err => {throw (err)})
						}
					})
				} else {
					res.send({ noExisteDocente: true })
				}
			})
			.catch(err=> console.log(err))
		} else {
			console.log('no estan llegando los datos')
		}
	}
}

module.exports = registrarCargaAcademicaController
