var verificarCargaDocente   = require('../librerias/verificarCargaDocente.js')
	obtenerNotasLogro 		= require('../librerias/obtenerNotasLogro.js')

var cargarLogrosControler = (logros, db, carga_academica)=>{
	return (req, res)=>{
		var grado 			= req.body.grado,
			periodo 		= req.body.periodo,
			idAsignatura 	= req.body.idAsignatura,
			cedula 			= req.session.objsesion.cedula,
			ti 				= req.body.ti

		verificarCargaDocente(carga_academica, cedula, idAsignatura)
		.then( dicta => {
			if ( dicta ){
				logros.find({
					idasignatura: idAsignatura,
					periodo 	: periodo,
					grado 		: grado },
					(err, docs)=>{
						if (err){
							throw (err)
						} else {
							obtenerNotasLogro(db, idAsignatura, grado, periodo, ti)
							.then( notas => {
								array 	= []
								obj 	= {}
								docs.forEach( function(element, index) {
									obj = { 
										idlogro: element.idlogro,
										nombre : element.nombre
									 }
									 array.push(obj)
								})
								notas.forEach( function(nota, index) {
									array.forEach( function(doc, index) {
										if (doc.idlogro === nota.idlogro){
											doc.nota 		= nota.nota
											doc.observacion = nota.observacion
											doc.ti 			= nota.estudiante_ti
										}
									})
								})
								res.send({ logros: array })
							} )
						}
				})
			} else {
				res.send({ noDicta: true })
			}
		} )
	}
}
module.exports = cargarLogrosControler