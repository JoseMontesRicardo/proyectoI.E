var siEstasLoggeado = function(req, res, next){
	if ( !req.session.objsesion ){
		res.redirect('/login')
		return
	}
	next()
}

module.exports = siEstasLoggeado