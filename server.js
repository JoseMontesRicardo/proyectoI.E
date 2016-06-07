	const  	express 		= require('express'),
		server 			= express(),
		swig 			= require('swig'),
		dataBase 		= require('./app/librerias/baseDatos.js')(),
		bodyParser 	 	= require('body-parser'),
		http 			= require('http').Server(server),
		io 				= require('socket.io')(http),
		sharedsession 	= require('express-socket.io-session'),
		_ 				= require('underscore'),
		session 		= require('express-session')({
			secret: 'colegioproyecto de grado 2016',
			resave: true,
			saveUninitialized: true
		})

//configuracion para la libreria que renderiza las vistas (swig)
swig.Swig({varControls:['[[',']]']})

server.engine('html', swig.renderFile)
server.set('view engine', 'html')
server.set('views', './app/vistas')

swig.setDefaults({
	cache: false
})


server.use(bodyParser())
server.use(express.static(__dirname + '/public'))
server.use(session)
io.use(sharedsession(session))

// var usuariosConectados = []

// bases de datos redis y mysql
db 			= require('./app/librerias/baseDatos.js')()
redisClient = require('./app/librerias/db_redis')()

redisClient.on("error", function (err) {
    console.log("Error " + err);
});


// modelos
usuarios 		= require('./app/modelos/Usuarios.js')(db)
acudientes 		= require('./app/modelos/Acudiente.js')(db)
docentes 		= require('./app/modelos/Docente.js')(db)
grados 			= require('./app/modelos/Grados.js')(db)
grupos 			= require('./app/modelos/Grupos.js')(db)
grado_grupo 	= require('./app/modelos/Grado_Grupo.js')(db)
estudiantes 	= require('./app/modelos/Estudiantes.js')(db)
areas 			= require('./app/modelos/Areas.js')(db)
asignaturas		= require('./app/modelos/Asignaturas.js')(db)
logros			= require('./app/modelos/Logros.js')(db)
grado_asignatura = require('./app/modelos/Grado_Asignatura.js')(db)
carga_academica = require('./app/modelos/Carga_Academica.js')(db)
horarios        = require('./app/modelos/Horarios.js')(db)
mensajes		= require('./app/modelos/Mensajes.js')(db)
informe 		= require('./app/modelos/Informe.js')(db)
informe_logro 	= require('./app/modelos/Informe_logro.js')(db)


// enrrutadores
routerLogin						= require('./app/routers/r.login.js')
routerAdministrador				= require('./app/routers/r.administrador.js')
routerAcudiente 				= require('./app/routers/r.acudiente.js')
routerDocente	 				= require('./app/routers/r.docente.js')
routerNuevoUsuario 				= require('./app/routers/r.nuevoUsuario.js')
routerBuscarUsuario				= require('./app/routers/r.buscarUsuario.js')
routerModificarUsuario			= require('./app/routers/r.modificarUsuario.js')
routerRegistrarGrado 			= require('./app/routers/r.registrarGrado.js')
routerRegistrarGrupo 			= require('./app/routers/r.registrarGrupo.js')
routerCargarGradosGrupos 		= require('./app/routers/r.cargarGradosGrupos.js')
routerCargarSalones 			= require('./app/routers/r.cargarSalones.js')
routerCargarPlanes	 			= require('./app/routers/r.cargarPlanes.js')
routerCargarCargas	 			= require('./app/routers/r.cargarCargas.js')
routerCargarGrados	 			= require('./app/routers/r.cargarGrados.js')
routerCargarGrupos	 			= require('./app/routers/r.cargarGrupos.js')
routerEliminarSalon 			= require('./app/routers/r.eliminarSalon.js')
routerEliminarGrado 			= require('./app/routers/r.eliminarGrado.js')
routerEliminarGrupo 			= require('./app/routers/r.eliminarGrupo.js')
routerEliminarPlan				= require('./app/routers/r.eliminarPlan.js')
routerEliminarCarga				= require('./app/routers/r.eliminarCarga.js')
routerBuscarEstudiante			= require('./app/routers/r.buscarEstudiante.js')
routerNuevoEstudiante 			= require('./app/routers/r.nuevoEstudiante.js')
routerVerificarPadre 			= require('./app/routers/r.verificarPadre.js')
routerRegistrarSalon 			= require('./app/routers/r.registrarSalon.js')
routerRegistrarArea				= require('./app/routers/r.registrarArea.js')
routerAgregarHijoPadre 			= require('./app/routers/r.agregarHijoPadre.js')
routerCargarAreas				= require('./app/routers/r.cargarAreas.js')
routerNuevaAsignatura 			= require('./app/routers/r.nuevaAsignatura.js')
routerModificarEstudiante		= require('./app/routers/r.modificarEstudiante.js')
routerBuscarArea				= require('./app/routers/r.buscarArea.js')
routerModificarArea				= require('./app/routers/r.modificarArea.js')
routerBuscarAsignatura			= require('./app/routers/r.buscarAsignatura.js')
routerCargarAsignaturas			= require('./app/routers/r.cargarAsignaturas.js')
routerNuevoLogro 				= require('./app/routers/r.nuevoLogro.js')
routerBuscarLogro				= require('./app/routers/r.buscarLogro.js')
routerRegistrarPlanAcademico 	= require('./app/routers/r.registrarPlanAcademico.js')
routerRegistrarPlanAcademico 	= require('./app/routers/r.registrarPlanAcademico.js')
routerRegistrarCarga 			= require('./app/routers/r.registrarCargaAcademica.js')
routerVerificar 				= require('./app/routers/r.verificar.js')
routerRegistrarHorario      	= require('./app/routers/r.registrarHorario.js')
routerBuscarHorario				= require('./app/routers/r.buscarHorario.js')
routerGetHorario 				= require('./app/routers/r.buscarHorarioEstudiante.js')
routerGetHorarioDocente			= require('./app/routers/r.getHorarioDocente.js')
routerGetDocentes				= require('./app/routers/r.buscarDocentesEstudiante.js')
routerGetAsignaturas  			= require('./app/routers/r.buscarAsignaturaEstudiante.js')
routerGetLogros 				= require('./app/routers/r.buscarLogrosEstudiante.js')
routerGetMensajes 				= require('./app/routers/r.getMensajes.js')
routerCargarAsignaturasDictadas = require('./app/routers/r.cargarAsignaturasDictadas.js')
routerSalonesDictados 			= require('./app/routers/r.salonesDictados.js')
routerCargarNinos 				= require('./app/routers/r.cargarNinos.js')
routerCargarLogros 				= require('./app/routers/r.cargarLogros.js')
routerGetDatosEstudiante 		= require('./app/routers/r.getDatosEstudiante.js')
routerGetDatosDocente			= require('./app/routers/r.getDatosDocente.js')
routerGetDatosAcudiente			= require('./app/routers/r.getDatosAcudiente.js')
routerSendMail 					= require('./app/routers/r.sendMail.js')


//actvacion de los routers
routerLogin(server)
routerAdministrador(server, grados)
routerAcudiente(server)
routerDocente(server)
routerNuevoUsuario(server, usuarios, acudientes, docentes)
routerBuscarUsuario(server, usuarios)
routerModificarUsuario(server, usuarios)
routerRegistrarGrado(server, grados)
routerRegistrarGrupo(server, grupos)
routerCargarGradosGrupos(server, grados, grupos)
routerCargarSalones(server, grado_grupo)
routerCargarPlanes(server,grado_asignatura)
routerCargarCargas(server,carga_academica)
routerCargarGrados(server, grados)
routerCargarGrupos(server,grupos)
routerEliminarPlan(server, grado_asignatura)
routerEliminarSalon(server, grado_grupo)
routerEliminarGrado(server,grados)
routerEliminarGrupo(server,grupos)
routerEliminarCarga(server, carga_academica)
routerBuscarEstudiante(server, estudiantes)
routerNuevoEstudiante(server, estudiantes, grado_grupo)
routerVerificarPadre(server, acudientes)
routerRegistrarSalon(server, grado_grupo)
routerRegistrarArea(server, areas)
routerAgregarHijoPadre(server, estudiantes, grado_grupo)
routerCargarAreas(server, areas)
routerNuevaAsignatura(server, asignaturas)
routerModificarEstudiante (server, estudiantes)
routerBuscarArea(server, areas)
routerModificarArea(server, areas)
routerBuscarAsignatura(server, asignaturas)
routerCargarAsignaturas(server, asignaturas)
routerNuevoLogro (server, logros)
routerBuscarLogro(server, logros)
routerRegistrarPlanAcademico (server, grado_asignatura)
routerRegistrarCarga(server, carga_academica, docentes)
routerVerificar(server, usuarios)
routerRegistrarHorario( server, horarios, docentes )
routerBuscarHorario(server, horarios)
routerGetHorario(server, db)
routerGetHorarioDocente(server, db)
routerGetDocentes(server, db)
routerGetAsignaturas(server, db)
routerGetLogros(server, db)
routerGetMensajes(server, mensajes)
routerCargarAsignaturasDictadas(server, db)
routerSalonesDictados(server, db)
routerCargarNinos(server, db)
routerCargarLogros(server, logros, db, carga_academica)
routerGetDatosEstudiante(server, db)
routerGetDatosDocente(server, db)
routerGetDatosAcudiente(server,db)
routerSendMail(server, usuarios)


// librerias
colocarOnline = require('./app/librerias/colocarOnline.js')
colocarOffline = require('./app/librerias/colocarOffline.js')

// eventos del socket
calificar 						= require('./app/socketCalificacion/calificar.js')
docentesOnline					= require('./app/socketsChat/docentesOnline.js')
docentesAcudientesOnline		= require('./app/socketsChat/docentesAcudientesOnline.js')
emitirDocenteConectado 			= require('./app/socketsChat/emitirDocenteConectado.js')
emitirUsuarioConectado 			= require('./app/socketsChat/emitirUsuarioConectado.js')
verificarRol					= require('./app/socketsChat/verificarRol.js')
enviarMensaje 					= require('./app/socketsChat/enviarMensaje.js')
obtenerNoLeidos 				= require('./app/socketsChat/obtenerNoLeido.js')
avisarEscritura 				= require('./app/socketsChat/avisarEscritura.js')

server.get('/forgotPass', (req, res)=>{
	res.render('forgotPass')
})

server.get('/loggOut', function(req, res){
	req.session.destroy()
	res.redirect('/login')
})

server.use(function(req, res){
	res.status(404).render('404')
})

var chat = io.of('/chat')

chat.use(sharedsession(session))
chat.on('connection', function(socket){
	socket.handshake.session.objsesion.socketId = socket.id
	colocarOnline(socket.handshake.session.objsesion.cedula, db)
	docentesOnline(socket, usuarios)
	redisClient.mset(socket.handshake.session.objsesion.cedula, socket.id)
	docentesAcudientesOnline(socket, usuarios)
	emitirDocenteConectado(socket, usuarios)
	emitirUsuarioConectado(socket, usuarios)
	verificarRol(socket)
	calificar(socket, informe, informe_logro)
	enviarMensaje(socket, chat, redisClient, mensajes)
	obtenerNoLeido(socket, db)
	avisarEscritura(socket, chat,redisClient)
	socket.on('cambiarContrasena', (data)=>{
		usuarios.find({ cedula: socket.handshake.session.objsesion.cedula, password: data.vieja}, (err, res)=>{
			if ( err ){
				throw (err)
			} else {
				if (res[0]){
					res[0].save({
						password: data.nueva
					}, (err)=>{
						if ( !err ){
							socket.emit('passError', { err: false })
						}
					})
				} else {
					socket.emit('passError', { err: true })
				}
			}
		})
	})
	socket.on('eventoLeido', (data)=>{
		var cedulaEmisor 	= socket.handshake.session.objsesion.cedula,
			cedulaReceptor 	= data.cedulaReceptor
			db.driver.execQuery(`update mensajes set leido = 1 
								where ( mensajes.receptor = ${cedulaEmisor} and mensajes.emisor = ${cedulaReceptor} and leido = 0  )`,
						(err, res)=>{
							if (err){
								throw (err)
							} else {
								console.log('Update!')
							}
						})	
	})
	socket.on('disconnect', function(data){
		colocarOffline(socket.handshake.session.objsesion.cedula, db)
		redisClient.del(socket.handshake.session.objsesion.cedula, (err,res)=>{
			if (!err){
				console.log('eliminado')
				socket.broadcast.emit('usuarioDesconectado', { usuario: socket.handshake.session.objsesion })
			}
		})
	})
})



http.listen(3000, function(){
	console.log('server corriendo en port:3000')
})
