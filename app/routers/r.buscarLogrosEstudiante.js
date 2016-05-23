getLogrosController = require('../controladores/getLogrosController.js')
var routerBuscarLogros = (server, db)=>{
	server.post('/getLogro', getLogrosController(db))
}

module.exports = routerBuscarLogros