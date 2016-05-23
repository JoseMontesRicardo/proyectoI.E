var colocarOffline = (cedula, db)=>{
	db.driver.execQuery(`update usuario set estado = 'offline' where ( cedula = ${cedula} )`, (err, result)=>{
		if (err){
			throw (err)
		} else {
			console.log('user offline')
		}
	})
}

module.exports = colocarOffline