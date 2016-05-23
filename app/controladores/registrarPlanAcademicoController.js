
var registrarPlanAcademicoController = (grado_asignatura)=>{
	return (req, res)=>{
		var grado = req.body.grados,
			asignatura = req.body.asignaturas

		var agregarPlanAcademico = (grado, asignatura) => {
			return new Promise((resolve, reject) => {
				grado_asignatura.create({
					grado_idgrado 				: grado,
					asignatura_idasignatura 	: asignatura
				}, (err, nuevoPlanAcademico) => {
					if (err){
						throw (err)
					} else {
						resolve(nuevoPlanAcademico)
					}
				})
			})
		}

		var verificarPlanAcademico = (grado, asignatura) => {
			var nuevoPlanAcademico = { 
					grado_idgrado			: grado,
					asignatura_idasignatura	: asignatura
				}
			return new Promise ( (resolve, reject) => {
				grado_asignatura.exists( nuevoPlanAcademico, (err, existe) => {
					if (err){
						throw (err)
					} else {
						resolve(existe)
					}
				})
			} )
		}

		if ( asignatura && grado ){
			verificarPlanAcademico(grado, asignatura)
			.then(existe => {
				if (!existe){
					agregarPlanAcademico(grado, asignatura)
					.then(nuevoPlanAcademico => {
						
						res.send( {nuevoPlanAcademico: true} )
					})
				} else {
					res.send( {nuevoPlanAcademico: false} )
				}
			})
		} else {
			console.log('no estan llegando datos')
		}
	}
}

module.exports = registrarPlanAcademicoController