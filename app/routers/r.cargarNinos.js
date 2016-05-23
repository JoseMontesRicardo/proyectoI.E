var cargarNinosController = require('../controladores/cargarNinosController.js')

var routerCargarNinos = (server, db)=>{
	server.post('/cargarNinos', cargarNinosController(db))
}
module.exports = routerCargarNinos