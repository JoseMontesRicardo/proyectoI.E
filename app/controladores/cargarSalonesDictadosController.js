var cargarSalonesDictadosController = (db)=>{
	return (req, res)=>{
		var idasignatura 	= req.body.idasignatura,
			cedula 			= req.session.objsesion.cedula
		db.driver.execQuery(`select grado,grupo from horario
							where ( horario.docente_cedula = '${cedula}' and idasignatura = ${idasignatura} )
                			group by grupo, grado`,
            (err, result)=>{
                if ( err ){
                	throw (err)
                } else {
                	res.send( { salones: result } )
                }
		})
	}
}
module.exports = cargarSalonesDictadosController