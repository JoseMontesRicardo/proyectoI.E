
var nodemailer 		= require('nodemailer')

var sendMailController = (usuarios)=>{

	var findUser= (mail)=>{
		return new Promise( (resolve, reject)=>{
			usuarios.find({email: mail}, (err, res)=>{
				if (err){
					throw (err)
				} else {
					resolve(res[0])
				}
			})
		} )
	}

	var enviarEmail = (usuario)=>{
		return new Promise((resolve, reject)=>{
			transporter = nodemailer.createTransport({
	    service: 'Gmail',
		    auth: {
		        user: 'pablosextoayapel@gmail.com',
		        pass: 'katy123456'
		    }
		})

		var mailOptions = {
		    from: 'pablosextoayapel@gmail.com', // sender address
		    to: usuario.email, // list of receivers
		    subject: 'Reestablecer contraseña', // Subject line
		    html: `
		    <html lang="en">
			<head>
				<meta charset="UTF-8">
			</head>
			<body>
				<header style="text-align:center; background-color:#009688;padding:1rem">
					<img style="border-radius:50%;border:3px solid white; width:140px;" src="cid:unique@kreata.ee">
					<h1 style="color:white;">Pablo sexto</h1>
				</header>
				<div style="text-align:center;">
					<h1>Hola <span><strong>${usuario.nombre1} ${usuario.apellido1}!</strong></span></h1>
					<h2>
						tu contraseña es: <span style="color:#009688">**${usuario.password}**</span>
					</h2>
				</div>
				<footer style="text-align:center;border-top:1px solid gray;">
					<p style="color: gray;">Pablo sexto © 2016</p>
				</footer>
			</body>
			</html>`,
			attachments: [{
				filename: 'logo.jpg',
				path: 'public/img/escudo.png',
				cid: 'unique@kreata.ee' //same cid value as in the html img src
			}]
		}
		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        throw (error)
		    } else {
		    	resolve(info)
		    	// console.log('Message sent: ' + info.response);
		    }

		})
		})
	}
	return (request, response)=>{
		findUser(request.body.mail)
		.then( res => {
			if ( res ){
				enviarEmail(res)
				.then(info => {
					response.send({exito: true})
				})
			} else {
				response.send({exito: false})
			}
		})
		.catch( err =>{
			console.log(err)
		} )
	}
}

module.exports = sendMailController