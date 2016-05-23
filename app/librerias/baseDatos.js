var orm 	= require('orm'),
	user 	= 'root',
	pass 	= '123456',
	host 	= 'localhost',
	db 		= 'db_colegio',
	string 	= 'mysql://'+ user +':'+ pass +'@'+ host +'/'+ db +''

const connection = function (){
	console.log('conecto')
	return db = orm.connect(string)
}

module.exports = connection