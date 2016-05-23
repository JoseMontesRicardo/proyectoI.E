const cargarSalonesController = require('../controladores/cargarSalonesController.js')


var routerCargarSalones = (server, grado_grupo) => {
	server.post('/cargarSalones', cargarSalonesController(grado_grupo))
}

module.exports = routerCargarSalones