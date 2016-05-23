var cargarAsignaturasDictadasController = require('../controladores/cargarAsignaturasDictadasController.js')

var routerCargarAsignaturasDictadas = (server, db)=>{
	server.post('/cargarAsignaturasDictadas', cargarAsignaturasDictadasController(db))
}

module.exports = routerCargarAsignaturasDictadas