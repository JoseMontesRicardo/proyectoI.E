var moduleDocente = angular.module('moduleDocente', [
		'factorySocket'
	])
moduleDocente.directive('ngSelect', function() {
return {
    link: function() {
        $('select').material_select();
    }
   }
 })
moduleDocente.directive('ngTooltip', function() {
return {
    link: function() {
         $('.tooltipped').tooltip();
    }
   }
 })

moduleDocente.controller('controladorSalones', function($scope, socket, $http, $routeParams){
	$scope.grado 		= $routeParams.grado
	$scope.grupo 		= $routeParams.grupo
	$scope.materia 		= $routeParams.asignatura
	$scope.idAsignatura = $routeParams.codigoAsignatura

	$scope.calificar 	= (ti, periodo,idlogro)=>{
		var nota 		= $(`#${idlogro} input[tipo-input = 'nota']`).val(),
			observacion = $(`#${idlogro} input[tipo-input = 'observacion']`).val()

		if ( !nota ){
			Materialize.toast('Debe digitar una nota', 2000, 'error')
		} else {
			socket.emit('calificar', {
				ti 			: ti,
				periodo 	: periodo,
				idlogro 	: idlogro,
				nota 		: nota,
				observacion : observacion
			})
		}
	}
	$scope.cargarLogros = ()=>{
		reqAjax = $http.post('/cargarLogros', {
			grado 			: $scope.grado,
			periodo 		: $scope.selectPeriodo,
			idAsignatura 	: $scope.idAsignatura,
			ti 				: $scope.ti
		})
		.success((res)=>{
			if ( res.logros ){
				$scope.listaLogros = res.logros
				console.log(res.logros)
			}
			if ( res.noDicta ){
				Materialize.toast('no puede calificar esta materia', 3000, 'error')
			}
		})
		.error((err)=>{
			
		})
	}


	$scope.mostrarModalInforme = ()=>{
		$('#modal-verificar-informe').openModal({
			complete: ()=>{
				$scope.listaLogros = []
			}
		})
	}

	$scope.mostrarModalContrasena = ()=>{
		$('#modal-cambiar-contrasena').openModal()
	}
	$scope.verificarInforme = (ti, nombre, apellido)=>{
		$scope.modalNombre 		= nombre 
		$scope.modalApellido 	= apellido
		$scope.ti 				= ti
		$scope.mostrarModalInforme()
	}

	$scope.cargarNinos = ()=>{
		reAjax = $http.post('/cargarNinos', { 
			grado: $scope.grado,
			grupo: $scope.grupo
		})
		.success((res)=>{
			$scope.ninos = res.ninos
		})
		.error((err)=>{
			alert('hay erro')
		})
	}
})

moduleDocente.controller('docenteController', function($scope, socket, $http, $timeout, $interval){
	$scope.notificaciones = []
	$scope.mensajesChat = []
	

	$interval(()=>{
		$('.unread').hide()
	},3000)

	socket.on('usuariosConectados', function(data){
		$scope.acudientesConectados = data.usuariosConectados
	})

	socket.on('avisoCalificacion', (data)=>{
		Materialize.toast('se califico correctamente', 2000, 'success')
	})
	socket.on('errorCalificacion', (data)=>{
		Materialize.toast('ya este logro se califico en este periodo', 2000, 'error')
	})

	socket.on('avisoDocenteConectado', (data)=>{
		let docente = data.docente
		if (!$scope.usuarioConectado(docente)){
			$scope.acudientesConectados.push(docente)	
		}
	})

	socket.on('usuarioDesconectado', (data)=>{
		let usuario = data.usuario
		$scope.acudientesConectados.forEach( function(element, index) {
				if ( element.cedula === usuario.cedula ){
					$scope.acudientesConectados = _.without($scope.acudientesConectados, element)
				}
		})
	})

	socket.on('avisoUsuarioConectado', (data)=>{
		let usuario = data.usuario
		if (!$scope.usuarioConectado(usuario)){
			$scope.acudientesConectados.push(usuario)	
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

	socket.on('recibirMensaje', (data)=>{
		var audio 	= new Audio('../audio/alert.mp3')
		audio.play()
		$scope.notificar()
		var mensaje = data.mensaje
		$scope.acudientesConectados.forEach( function(element, index) {
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

	socket.on('escribiendo', (data)=>{
		cedulaAvisar = data.cedula
		if ( $scope.cedulaChat === cedulaAvisar ){
			$('.unread').show()
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

	$scope.notificar = ()=>{
		$('.anclaje-mensaje__contenedor').addClass('rotate')
		$timeout(()=>{
			$('.anclaje-mensaje__contenedor').removeClass('rotate')
		}, 1000)
	}

	$scope.avisarEscritura = (cedulaReceptor)=>{
		socket.emit('avisarEscritura', {cedulaReceptor: cedulaReceptor})
	}

	$scope.cargarNotificaciones = ()=>{
		socket.emit('noLeidos', {hola:'hola'})
	}

	$scope.cargarSalonesAsignados = (idasignatura, nombreAsignatura)=>{
		reqAjax = $http.post('/cargarSalonesDictados', {
		 idasignatura: idasignatura 
		})
		.success((res)=>{
			$scope.salones = res.salones
			$scope.asignaturaSalon = nombreAsignatura
			$scope.idAsignaturaSalon = idasignatura
		})
		.error( (err)=>{

		})
	}

	$scope.cargarAsignaturas = ()=>{
		reqAjax = $http.post('/cargarAsignaturasDictadas')
		.success((res)=>{
			$scope.listaAsignaturas = res.asignaturas
		})
		.error( (err)=>{

		})
	}
		$scope.cargarDatosDocente = function(){
		reqAjax = $http.post('/getDatosDocente')
		.success(function(res){
			$scope.listaInfo = res.info
		})
		.error(function(err){
			
		})
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

	$scope.cargarHorarioDocente = function(){
		reqAjax = $http.post('/horarioDocente')
		.success(function(res){
			$scope.listaLunes 		= res.lunes
			$scope.listaMartes 		= res.martes
			$scope.listaMiercoles 	= res.miercoles
			$scope.listaJueves  	= res.jueves
			$scope.listaViernes  	= res.viernes
		})
		.error(function(err){
			
		})
	}

	$scope.enviarMensaje = (cedulaReceptor, mensaje)=>{
		if (mensaje){
			socket.emit('enviarMensaje', { cedulaReceptor: cedulaReceptor, mensaje: mensaje })
			$scope.mensajeEnviar = ''
		}
	}

		$scope.usuarioConectado = (docente)=>{
		let contador 	= 0
		let bool 		= false
		$scope.acudientesConectados.forEach( function(element, index) {
			if ( element.cedula === docente.cedula ){
				contador++
			}
			if ( $scope.acudientesConectados.length-1 === index ){
				if ( contador > 0 ){
					bool = true
 				}
			}
		})
		return bool
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

		socket.emit('eventoLeido', { cedulaReceptor: cedulaReceptor })
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
})