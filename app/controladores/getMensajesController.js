
var getMensajesController = (mensajes)=>{
	return (req, res)=>{
		var receptor = req.body.receptor

		mensajes.find( { receptor: [receptor, req.session.objsesion.cedula], emisor: [receptor, req.session.objsesion.cedula] }, (err, result)=>{
			if (err){
				throw (err)
			} else {
				res.send({ mensajes: result })
			}
		} )
	}
}

module.exports = getMensajesController