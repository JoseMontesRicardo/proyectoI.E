var siEstasLoggeado = function(req, res, next){
	if ( !req.session.usuario ){
		res.redirect('/loggin')
		return
	}
	next()
}

module.exports = siEstasLoggeado