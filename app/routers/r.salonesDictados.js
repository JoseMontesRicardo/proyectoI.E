var cargarSalonesDictadosController = require('../controladores/cargarSalonesDictadosController.js')

var routersalonesDictados = (server, db)=>{
	server.post('/cargarSalonesDictados', cargarSalonesDictadosController( db ) )
}

module.exports = routersalonesDictados