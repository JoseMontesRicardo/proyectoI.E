var siEsDocente = function(req, res, next){
	if ( !(req.session.objsesion.nivel === 2) ){
		if ( req.session.objsesion.nivel === 1 ){
			res.redirect('/administrador')
			return
		} else if ( req.session.objsesion.nivel === 3 ){
			res.redirect('/acudiente')
			return
		}
	}
	next()
}

module.exports = siEsDocente