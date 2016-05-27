
var siEsAcudiente = function(req, res, next){
	if ( !(req.session.objsesion.nivel === 2 && req.session.objsesion.nivel === 3) ){
		if ( req.session.objsesion.nivel === 1 ){
			res.redirect('/administrador')
			return
		} 
	}
	next()
}

module.exports = siEsAcudiente