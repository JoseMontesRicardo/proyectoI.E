
var siEsAdministrador = function(req, res, next){
	if ( !(req.session.usuario.rol === 1) ){
		if ( req.session.usuario.rol === 3 ){
			res.redirect('/alumnos')
			return
		}
	}
	next()
}

module.exports = siEsAdministrador