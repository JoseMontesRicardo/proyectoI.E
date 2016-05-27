getDatosAcudienteController = require('../controladores/getDatosAcudienteController.js')
var routerDatosAcudiente = (server, db)=>{
	server.post('/getDatosAcudiente', getDatosAcudienteController(db))
}

module.exports = routerDatosAcudiente