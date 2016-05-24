var acudienteControlador = angular.module('acudienteControlador', [
	'factorySocket'
	])

acudienteControlador.controller('controladorAcudientes', function($scope, $http, socket, $timeout, $interval){
	$scope.notificaciones = []
	$scope.mensajesChat = []

	$interval(()=>{
		$('.unread').hide()
	},3000)

	socket.on('docentesConectados', function(data){
		$scope.usuariosConectados = data.docentesConectados
	})

	socket.on('usuariosConectados', function(data){	
		$scope.usuariosConectados = data.usuariosConectados
	})

	socket.on('avisoDocenteConectado', (data)=>{
		let docente = data.docente
		if (!$scope.usuarioConectado(docente)){
			$scope.usuariosConectados.push(docente)	
		}
	})

	socket.on('verificarRol', (data)=>{
		rol 	= data.rol
		usuario = data.usuario 
		if ( rol === 2 ){
			$scope.usuariosConectados.push(usuario)	
		}
	})

	socket.on('usuarioDesconectado', (data)=>{
		let usuario = data.usuario
		$scope.usuariosConectados.forEach( function(element, index) {
			if ( element.cedula === usuario.cedula ){
				$scope.usuariosConectados = _.without($scope.usuariosConectados, element)
			}
		})
	})

	socket.on('avisoUsuarioConectado', (data)=>{
		let usuario = data.usuario
		if (!$scope.usuarioConectado(usuario)){
			socket.emit('verificarRol', {obj: usuario})
		}
	})

	socket.on('noLeidos', (data)=>{
		console.log(data.noLeidos)
		data.noLeidos.forEach( function(element, index) {
			$scope.notificaciones.push({
				cedula		: element.emisor,
				nombre1 	: element.nombre1,
				apellido1	: element.apellido1
			})
		})
		if ( $scope.notificaciones.length !== 0 ){
			$('.anclaje-mensaje__contenedor').show()
		}
	})

	socket.on('escribiendo', (data)=>{
		cedulaAvisar = data.cedula
		if ( $scope.cedulaChat === cedulaAvisar ){
			$('.unread').show()
		}
	})

	socket.on('recibirMensaje', (data)=>{
		var audio 	= new Audio('../audio/alert.mp3')
		audio.play()
		$scope.notificar()
		var mensaje = data.mensaje
		$scope.usuariosConectados.forEach( function(element, index) {
			if ( element.cedula === mensaje.emisor ){
				var existe = _.find($scope.notificaciones, (element)=>{
						return element.cedula == mensaje.emisor
					})
				if (!existe){
					$scope.notificaciones.push(element)
					$('.anclaje-mensaje__contenedor').show()
				}
			}
		})
		if ( $scope.cedulaChat === mensaje.emisor ){
			$scope.mensajesChat.push(mensaje)
			// $('.contenedor-mensajes').animate({ scrollTop: $('.contenedor-mensajes').height() }, 500)
			var wtf    = $('.contenedor-mensajes');
			var height = wtf[0].scrollHeight;
			wtf.scrollTop(height);
		}
	})

	socket.on('enviarMensaje', (data)=>{
		var mensaje = data.mensaje
		$scope.mensajesChat.push(mensaje)
		// $('.contenedor-mensajes').animate({ scrollTop: $('.contenedor-mensajes').height() }, 500)
		var wtf    = $('.contenedor-mensajes');
		var height = wtf[0].scrollHeight;
		wtf.scrollTop(height);
	})

	$scope.avisarEscritura = (cedulaReceptor)=>{
		socket.emit('avisarEscritura', {cedulaReceptor: cedulaReceptor})
	}

	$scope.notificar = ()=>{
		$('.anclaje-mensaje__contenedor').addClass('rotate')
		$timeout(()=>{
			$('.anclaje-mensaje__contenedor').removeClass('rotate')
		}, 1000)
	}

	$scope.enviarMensaje = (cedulaReceptor, mensaje)=>{
		if (mensaje){
			socket.emit('enviarMensaje', { cedulaReceptor: cedulaReceptor, mensaje: mensaje })
			$scope.mensajeEnviar = ''
			
		}
	}

	// cargar notificaciones
	$scope.cargarNotificaciones = ()=>{
		socket.emit('noLeidos', {hola:'hola'})
	}

	$scope.usuarioConectado = (docente)=>{
		let contador 	= 0
		let bool 		= false
		$scope.usuariosConectados.forEach( function(element, index) {
			if ( element.cedula === docente.cedula ){
				contador++
			}
			if ( $scope.usuariosConectados.length-1 === index ){
				if ( contador > 0 ){
					bool = true
 				}
			}
		})
		return bool
	}	

	$scope.verMensaje = (cedula)=>{
		if ( $scope.notificaciones.length !== 0 ){
			$scope.notificaciones.forEach( function(element, index) {
				if ( element.cedula === cedula ){
					$scope.notificaciones = _.without($scope.notificaciones, element)
				}
			})
			if ( $scope.notificaciones.length === 0 ){
				$('.anclaje-mensaje__contenedor').hide()
			}
		}
	}

	$scope.enviarLeido = function(cedulaReceptor){
		socket.emit('eventoLeido', { cedulaReceptor: cedulaReceptor })
	}

	$scope.mostrarVentana = function(nombre, cedulaReceptor){
		$('.ventana-chat').hide()
		$scope.verMensaje(cedulaReceptor)
		reAjax = $http.post('/getMensajes', { receptor: cedulaReceptor })
		.success((res=>{
			$scope.mensajesChat = res.mensajes
		}))
		$scope.nombreChat = nombre
		$scope.cedulaChat = cedulaReceptor
		$('.ventana-chat').show('fast',()=>{
			var wtf    = $('.contenedor-mensajes');
			var height = wtf[0].scrollHeight;
			wtf.scrollTop(height); 
		})
	}

	$scope.ocultarVentana = function(){
		$('.ventana-chat').hide()
	}

	$scope.cargarHorario = function(ti){
		reqAjax = $http.post('/getHorario', { ti: ti })
		.success(function(res){
			$scope.listaLunes 		= res.lunes
			$scope.listaMartes 		= res.martes
			$scope.listaMiercoles 	= res.miercoles
			$scope.listaJueves  	= res.jueves
			$scope.listaViernes  	= res.viernes
		})
		.error(function(err){
			
		})

		req = $http.post('/getDocente', { ti: ti })
		req.success(function(res){
			console.log(res.docente)
			$scope.listaDocente = res.docente
		})
		req.error(function(err){
			
		})

		req = $http.post('/getAsignatura', { ti: ti })
		req.success(function(res){
			$scope.listaAsignatura = res.asignatura
		})
		req.error(function(err){
			
		})

		req = $http.post('/getLogro', { ti: ti })
		req.success(function(res){
			$scope.listaLogros = res.logro
		})
		req.error(function(err){
			
		})


		req = $http.post('/getDatos', { ti: ti })
		req.success(function(res){
			$scope.listaDatos = res.datos
		})
		req.error(function(err){
			
		})
	}

	//Cargar docentes - vista acudiente
		$scope.cargarDocente = function(ti){
		reqAjax = $http.post('/getDocente')
		.success(function(res){
			$scope.listaDocente = res.docente
		})
		.error(function(err){
			
		})
	}
	//cargar datos del estudiante
	$scope.cargarDatosEstudiante = function(ti){
		reqAjax = $http.post('/getDatos')
		.success(function(res){
			$scope.listaDatos = res.datos
		})
		.error(function(err){
			
		})
	}

	//Cargar asignaturas 
	$scope.cargarAsignatura = function(ti){
		reqAjax = $http.post('/getAsignatura')
		.success(function(res){
			$scope.listaAsignatura = res.asignatura 
		})
		.error(function(err){

		})
	}
	

	//Cargar logros 
	$scope.cargarLogros = function(ti){
		reqAjax = http.post('/getLogro')
		.success(function(res){
			$scope.listaLogros = res.logro
		})
		.error(function(err){

		})
	}




	// funciones para agregar

	$scope.nuevoHijo = function(){
		var nombre1 	= $scope.agregarHijoNombre1,
			nombre2 	= $scope.agregarHijoNombre2,
			apellido1 	= $scope.agregarHijoApellido1,
			apellido2 	= $scope.agregarHijoApellido2,
			grupo	 	= $scope.agregarHijoGrupo,
			sexo 		= $scope.agregarHijoSexo,
			grado 		= $scope.agregarHijoGrado,
			direccion 	= $scope.agregarHijoDireccion,
			nacimiento 	= $scope.agregarHijoNacimiento,
			ti 		 	= $scope.agregarHijoTi

			if ( nombre1 && nombre2 && apellido1 && apellido2 && grupo && sexo && direccion && grado && ti && nacimiento ){
				reqAjax = $http.post('/agregarHijoPadre', { 
					nombre1 	: nombre1,
					nombre2 	: nombre2,
					apellido1 	: apellido1,
					apellido2 	: apellido2,
					grupo	 	: grupo,
					sexo 		: sexo,
					grado 		: grado,
					direccion 	: direccion,
					nacimiento 	: nacimiento,
					ti 		 	: ti,
				})
				reqAjax.success(function(respuesta){
					if (respuesta.existe){
						Materialize.toast('el niño ya esta registrado', 2000, 'error')
					}
					if (respuesta.noExisteSalon){
						Materialize.toast('el salon no existe!!', 2000, 'error')
					}
					if (respuesta.nuevoEstudiante){
						Materialize.toast('Registro Exitoso', 2000, 'success')
						setTimeout(function() {
							location.reload() 
						}, 2000)
					}
				})
				reqAjax.error(function(error){

				})
			} else {
				Materialize.toast('hay campos vacios!!', 2000, 'error')
			}
	}

	$scope.cargarGradosGrupos = function(){
		reqAjax = $http.post('/cargarGradosGrupos', { buscador: 'hola' })
		reqAjax.success(function(respuesta){
			$scope.listaGrados = respuesta.grado
			$scope.listaGrupos = respuesta.grupo
			console.log('holaa')
		})
		reqAjax.error(function(error){

		})
	}
	// funciones de modales
	$scope.mostrarAgregarHijo = function(){
		$('#agregar-hijo').openModal()
	}
})