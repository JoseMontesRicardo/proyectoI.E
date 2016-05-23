getDatosEstudianteController = require('../controladores/getDatosEstudianteController.js')
var routerDatosEstudiante = (server, db)=>{
	server.post('/getDatos', getDatosEstudianteController(db))
}

module.exports = routerDatosEstudiante