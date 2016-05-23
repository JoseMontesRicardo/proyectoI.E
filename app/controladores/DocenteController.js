var DocenteController = function(req,res){
	res.render('docente' , { objsesion: req.session.objsesion })
}
module.exports = DocenteController