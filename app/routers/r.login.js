var LoginController = require('../controladores/LoginController.js')

var routerLogin = function(server){
	server.get('/login', LoginController)
}

module.exports = routerLogin