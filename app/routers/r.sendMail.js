var sendMailController = require('../controladores/sendMailController.js')

var routerSendMail = (server, usuarios)=>{
	server.post('/sendMail', sendMailController(usuarios))
}

module.exports = routerSendMail