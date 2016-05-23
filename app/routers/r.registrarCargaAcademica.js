var registrarCargaAcademicaController = require('../controladores/registrarCargaAcademicaController.js')

var routerRegistrarCarga = (server, carga_academica, docentes)=>{
	server.post('/registrarCargaAcademica', registrarCargaAcademicaController(carga_academica, docentes))
}

module.exports = routerRegistrarCarga