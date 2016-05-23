var Area = function(db){
	return db.define('area',
	{
		codigo 			: {type: 'text', key: true},
		nombre			: {type: 'text'}
		
	})
}

module.exports = Area