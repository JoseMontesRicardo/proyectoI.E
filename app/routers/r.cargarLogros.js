var cargarLogrosControler = require('../controladores/cargarLogrosControler.js')

routerCargarLogros = (server, logros, db, carga_academica)=>{
	server.post('/cargarLogros', cargarLogrosControler(logros, db, carga_academica))
}
module.exports = routerCargarLogros