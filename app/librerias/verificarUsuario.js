
var verificarUsuario = (usuarios, cedula, contrasena)=>{
	return new Promise( (resolve, reject)=>{
		usuarios.find({ cedula: cedula, password: contrasena }, (err, usuario)=>{
			if (err){
				throw (err)
			} else {
				resolve(usuario)
			}
		})
	} )
}
module.exports = verificarUsuario