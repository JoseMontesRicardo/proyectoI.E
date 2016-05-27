
var siEsAdministrador = function(req, res, next){
	if ( !(req.session.objsesion.nivel === 1) ){
		if ( req.session.objsesion.nivel === 3 ){
			res.redirect('/acudiente')
			return
		} else if ( req.session.objsesion.nivel === 2 ){
			res.redirect('/docente')
			return
		}
	}
	next()
}

module.exports = siEsAdministrador