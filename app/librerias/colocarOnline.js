var colocarOnline = (cedula, db)=>{
	db.driver.execQuery(`update usuario set estado = 'online' where ( cedula = ${cedula} )`, (err, result)=>{
		if (err){
			throw (err)
		} else {
			console.log('user onlinre')
		}
	})
}

module.exports = colocarOnline