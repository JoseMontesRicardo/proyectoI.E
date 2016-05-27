const eliminarPlanController = require('../controladores/eliminarPlanController.js')


var routerEliminarPlan = (server, grado_asignatura) => {
	server.post('/eliminarPlan', eliminarPlanController(grado_asignatura))
}

module.exports = routerEliminarPlan