var registrarPlanAcademicoController = require('../controladores/registrarPlanAcademicoController.js')

var routerRegistrarPlanAcademico = (server, grado_asignatura)=>{
	server.post('/registrarPlanAcademico', registrarPlanAcademicoController(grado_asignatura))
}

module.exports = routerRegistrarPlanAcademico