controladorContenedorPrincipal = angular.module('controladorContenedorPrincipal',[
		'modelosAdministrador'
	])

controladorContenedorPrincipal.controller('cContenedorPrincipal', function($scope, $http, mAdministrador){
	$scope.inicio1 = function(){
	}

	//Funciones para limpiar campos
	$scope.limpiarRegistrarLogros = function(){
		$scope.registrarLogroCodigo = ''
		$scope.registrarLogroNombre = ''
		$scope.registrarLogroPeriodo = ''
		$scope.registrarLogroGrado = ''
		$scope.registrarLogroAsignatura = ''	
	}

	$scope.limpiarRegistrarAsignatura = function(){
		$scope.registrarAsignaturaArea = ''
		$scope.registrarAsignaturaNombre = ''
		$scope.registrarAsignaturaCodigo = ''	
	}

	$scope.limpiarRegistrarPlanAcademico = function(){
		$scope.grados = ''
		$scope.asignaturas = ''
	}

	$scope.limpiarRegistrarArea = function(){
		$scope.registrarAreaCodigo = ''
		$scope.registrarAreaNombre = ''
	}
	$scope.limpiarEditarEstudiante = function(){
		$scope.editarEstudianteNombre1 		= ''
		$scope.editarEstudianteNombre2		= ''
		$scope.editarEstudianteApellido1 	= ''
		$scope.editarEstudianteApellido2 	= ''
		$scope.editarEstudianteCedula		= ''
		$scope.editarEstudianteSexo			= ''
		// $scope.editarEstudianteGrado		= ''
		$scope.editarEstudianteDireccion	= ''
		$scope.editarEstudianteNacimiento 	= ''
		$scope.editarEstudianteTi 			= ''
	}
	$scope.limpiarRegistrarEstudiante = function(){
		$scope.registrarEstudianteNombre1 		= ''
		$scope.registrarEstudianteNombre2		= ''
		$scope.registrarEstudianteApellido1 	= ''
		$scope.registrarEstudianteApellido2 	= ''
		$scope.registrarEstudianteCedula		= ''
		$scope.registrarEstudianteSexo			= ''
		$scope.registrarEstudianteGrado			= ''
		$scope.registrarEstudianteDireccion		= ''
		$scope.registrarEstudianteNacimiento 	= ''
		$scope.registrarEstudianteTi 			= ''
	}

	$scope.limpiarRegistrarUsuario = function(){
		$scope.registrarUsuarioNombre1 		= ''
		$scope.registrarUsuarioNombre2 		= ''
		$scope.registrarUsuarioApellido1 	= ''
		$scope.registrarUsuarioApellido2 	= ''
		$scope.registrarUsuarioCedula 		= ''
		$scope.registrarUsuarioSexo 		= ''
		$scope.registrarUsuarioDireccion 	= ''
		$scope.registrarUsuarioCorreo		= ''
		$scope.registrarUsuarioTelefono 	= ''
	}
	$scope.limpiarEditarUsuario = function(){
		$scope.editarUsuarioNombre1 	= ''
		$scope.editarUsuarioNombre2 	= ''
		$scope.editarUsuarioApellido1 	= ''
		$scope.editarUsuarioApellido2 	= ''
		$scope.editarUsuarioCedula 		= ''
		$scope.editarUsuarioSexo 		= ''
		$scope.editarUsuarioDireccion 	= ''
		$scope.editarUsuarioCorreo		= ''
		$scope.editarUsuarioTelefono 	= ''
		$scope.editarUsuarioContrasena 	= ''
		$scope.editarUsuarioBuscar 		= ''
	}

-->//Todas las opciones para registrar//<--

	//REGISTRAR AREAS
	$scope.nuevaArea = function(){
		var codigo 	= $scope.registrarAreaCodigo,
			nombre	= $scope.registrarAreaNombre
			// validamos si todos los campos son correctos
			if ( codigo && nombre){
				reqAjax = $http.post('/registrarArea', {
					codigo 	: codigo,
					nombre 	: nombre					
				})
				.success(function(data){
					if ( data.existe ){
						Materialize.toast('¡El área de codigo ['+ codigo +'] Ya existe!', 2000, 'error')
					}
					if ( data.registrarArea ){
						Materialize.toast('¡Área registrada :)!', 2000, 'success')
						$scope.limpiarRegistrarArea()
						
					}
				})
				.error(function(error){
					Materialize.toast('ERROR DE RED!!', 2000, 'error')
				})
			} else {
				Materialize.toast('¡Hay campos Vacíos!', 2000, 'error')
			}

	}

	//REGISTRAR GRUPOS
	$scope.nuevoGrupo = function(){
		if ( $scope.registrarGrupo ){
			reqAjax = $http.post('/registrarGrupo', { grupo: $scope.registrarGrupo })
			reqAjax.success(function(respuesta){
				if ( respuesta.existe ){
					Materialize.toast('¡El grupo ya existe!', 2000, 'error')
				}
				if ( respuesta.grupoRegistrado ){
					Materialize.toast('¡Grupo Registrado!', 2000, 'success')
					$scope.cargarGradosGrupos()
				}
			})
			reqAjax.error(function(error){
				
			})

		} else {
			Materialize.toast('¡Debe digitar el Grupo!', 2000, 'error')
		}
	}

	//REGISTRAR GRADOS
	$scope.nuevoGrado = function(){
		if ( $scope.registrarGrado ){
			 if ( $scope.registrarGrado <= 11 ) {
				reqAjax = $http.post('/registrarGrado', { grado: $scope.registrarGrado })
				reqAjax.success(function(respuesta){
					if ( respuesta.existe ){
						Materialize.toast('¡El grado ya existe!', 2000, 'error')
					}
					if ( respuesta.gradoRegistrado ){
						Materialize.toast('¡Grado Registrado!', 2000, 'success')
						$scope.cargarGradosGrupos()
					}
				})
				reqAjax.error(function(error){
					
				})
			} else {
				Materialize.toast('Imposible agregar grado '+$scope.registrarGrado+'', 2000, 'error')
			}
		} else {
			Materialize.toast('¡Debe digitar el Grado!', 2000, 'error')
		}
	}

	// registrar carga academica
	$scope.nuevaCargaAcademica = function(){
		var asignatura 	= $scope.asignaturas,
			cedula 		= $scope.docentes
		if ( asignatura && cedula ){
			reqAjax = $http.post('/registrarCargaAcademica',{
				idasignatura: asignatura,
				cedula 		: cedula
			})
			.success(function(respuesta){
				console.log(respuesta.noExisteDocente)
				console.log(respuesta.existeCargaAcademica)

				if ( respuesta.noExisteDocente ){
					Materialize.toast('El docente no EXISTE!', 2000, 'error')
				}
				if ( respuesta.existeCargaAcademica ){
					Materialize.toast('la carga academica ya esta asignada!', 2000, 'error')
				}
				if ( respuesta.nuevaCarga ){
					Materialize.toast('Registro Existoso!', 2000, 'success')
				}
			})
			.error(function(error){

			})
		} else {
			Materialize.toast('Hay campos Vacios', 2000, 'error')
		}
		
	}

	//Registrar Horario de clases
	$scope.nuevoHorario = function(){
		
		var codigo = $scope.registrarHorarioCodigo,
			jornada = $scope.registrarHorarioJornada,
			dia    = $scope. registrarHorarioDia,
			hora = $scope.registrarHorarioHora,
			grado = $scope.registrarHorarioGrado,
			asignatura = $scope.registrarHorarioAsignatura,
			grupo = $scope.registrarHorarioGrupo,
			cedula = $scope.registrarHorarioDocente

		if (codigo && jornada && dia && hora && grado && asignatura && grupo && cedula){
			reqAjax = $http.post('/registrarHorario',{
				idhorario : codigo,
				jornada : jornada,
				dia : dia,
				hora : hora,
				grado : grado,
				idasignatura : asignatura,
				grupo : grupo,
				cedula : cedula
			
			})
			.success(function(respuesta){
				console.log(respuesta.noExisteDocente)
				console.log(respuesta.existeHorario)

				if ( respuesta.noExisteDocente ){
					Materialize.toast('El docente no EXISTE!', 2000, 'error')
				}
				if ( respuesta.existeHorario ){
					Materialize.toast('Ese horario ya está creado!', 2000, 'error')
				}
				if ( respuesta.nuevoHorario ){
					Materialize.toast('Registro Existoso!', 2000, 'success')
				}
			})
			.error(function(error){

			})
		} else {
			Materialize.toast('Hay campos Vacios', 2000, 'error')
		}
		
	}

	//REGISTRAR SALONES
	$scope.nuevoSalon = function(){
		if ( $scope.grados && $scope.grupos ){
			reqAjax = $http.post('/registrarSalon', { grados: $scope.grados, grupos: $scope.grupos })
			reqAjax.success(function(respuesta){
				if (respuesta.nuevoSalon){
					Materialize.toast('¡Salón ['+$scope.grados+'-'+$scope.grupos+'] agregado!', 2000, 'success')
					$scope.cargarSalones()
				} else {
					Materialize.toast('¡El salón ['+$scope.grados+'-'+$scope.grupos+'] ya existe!', 2000, 'error')
				}
			})
			reqAjax.error(function(error){
				alert('Problema de red :( ')
			})
		} else {
			Materialize.toast('¡Por favor seleccione un Grado y un Grupo!', 2000, 'error')
		}
	}


	//REGISTRAR ESTUDIANTES
	$scope.enviarAjaxEstudiante = function(pnombre1, pnombre2, papellido1, papellido2, pcedula, psexo, pdireccion, pgrado, pgrupo, pti, pnacimiento){
		reqAjax = $http.post('/nuevoEstudiante', { 
			nombre1 	: pnombre1,
			nombre2 	: pnombre2,
			apellido1 	: papellido1,
			apellido2 	: papellido2, 
			acudiente_cedula	 	: pcedula,
			sexo 			: psexo,
			grado 			: pgrado,
			grupo 			: pgrupo,
			direccion 		: pdireccion, 
			f_nacimiento 	: pnacimiento,
			ti 		 		: pti
		})
		reqAjax.success(function(respuesta){
				if ( respuesta.existe ){
					Materialize.toast('¡El estudiante con tarjeta de identidad ['+ pti +'] Ya existe!', 3000, 'error')
				}	
				if ( respuesta.nuevoEstudiante ){
					Materialize.toast('¡Estudiante Registrado :)!', 1000, 'success')
					$scope.limpiarRegistrarEstudiante()
				}
				if (respuesta.noExisteSalon){
					Materialize.toast('¡El salon NO existe!', 2000, 'error')
				}
		})
		reqAjax.error(function(error){

		})
	}

	$scope.nuevoEstudiante = function(){
		var nombre1 	= $scope.registrarEstudianteNombre1,
			nombre2 	= $scope.registrarEstudianteNombre2,
			apellido1 	= $scope.registrarEstudianteApellido1,
			apellido2 	= $scope.registrarEstudianteApellido2,
			cedula	 	= $scope.registrarEstudianteCedula,
			sexo 		= $scope.registrarEstudianteSexo,
			grado 		= $scope.registrarEstudianteGrado,
			grupo 		= $scope.registrarEstudianteGrupo,
			direccion 	= $scope.registrarEstudianteDireccion,
			nacimiento 	= $scope.registrarEstudianteNacimiento,
			ti 		 	= $scope.registrarEstudianteTi

			if ( nombre1 && nombre2 && grupo && apellido1 && apellido2 && cedula && sexo && direccion && grado && ti && nacimiento ){
				reqAjax = $http.post('/verificarPadre', { cedula: cedula })
				reqAjax.success(function(respuesta){
					if ( respuesta.existe ){
						$scope.enviarAjaxEstudiante(nombre1, nombre2, apellido1, apellido2, cedula, sexo, direccion, grado, grupo, ti, nacimiento)
					} else {
						Materialize.toast('¡El acudiente no se encuentra registrado!', 2000, 'error')
					}
				})
				reqAjax.error(function(error){

				})
			} else {
				Materialize.toast('¡Hay campos vacíos!!', 2000, 'error')
			}
	}

	//REGISTRAR USUARIOS
	$scope.nuevoUsuario = function(){
		var nombre1 	= $scope.registrarUsuarioNombre1,
			nombre2 	= $scope.registrarUsuarioNombre2,
			apellido1 	= $scope.registrarUsuarioApellido1,
			apellido2 	= $scope.registrarUsuarioApellido2,
			cedula	 	= $scope.registrarUsuarioCedula,
			sexo 		= $scope.registrarUsuarioSexo,
			direccion 	= $scope.registrarUsuarioDireccion,
			tipo 		= $scope.registrarUsuarioTipo,
			correo 		= $scope.registrarUsuarioCorreo,
			telefono 	= $scope.registrarUsuarioTelefono

			// validamos si todos los campos son correctos
			if ( nombre1 && nombre2 && apellido1 && apellido2 && cedula && sexo && direccion && tipo && correo && telefono ){
				reqAjax = $http.post('/nuevoUsuario', {
					nombre1 	: nombre1,
					nombre2 	: nombre2,
					apellido1 	: apellido1,
					apellido2 	: apellido2,
					cedula	 	: cedula,
					sexo 		: sexo,
					direccion 	: direccion,
					tipo 		: tipo,
					correo 		: correo,
					telefono 	: telefono
				})
				.success(function(data){
					// si existe muestra el dialogo de que el usuario existe
					if ( data.existe ){
						Materialize.toast('¡El usuario con cedula ['+ cedula +'] Ya existe!', 3000, 'error')
					}
					// si no existe responde con un usuario y nos verifica el registro exitoso
					if ( data.usuario ){
						Materialize.toast('¡Usuario Registrado :)!', 2000, 'success')
						$scope.limpiarRegistrarUsuario()
					}
				})
				.error(function(error){
					Materialize.toast('ERROR DE RED!!', 2000, 'error')
				})
			} else {
				Materialize.toast('¡Hay campos vacíos!', 2000, 'error')
			}

	}
	//REGISTRAR ASIGNATURAS
	$scope.nuevaAsignatura = function(){
		var codigoArea 		= $scope.registrarAsignaturaArea,
			nombre 			= $scope.registrarAsignaturaNombre,
			idAsignatura	= $scope.registrarAsignaturaCodigo

			if (codigoArea && nombre && idAsignatura){
				reqAjax = $http.post('/nuevaAsignatura',{
					codigoArea		: codigoArea, 	
					nombre			: nombre,
					idAsignatura	: idAsignatura
				})
				.success(function(respuesta){
					if (respuesta.nuevaAsignatura){
						Materialize.toast('¡Asignatura Registrada :)!', 2000, 'success')
						$scope.limpiarRegistrarAsignatura()
					}
					if (respuesta.existe){
						Materialize.toast('¡La asignatura Ya existe!', 2000, 'error')
					}
				})
				.error(function(err){

				})
			} else {
				Materialize.toast('¡Hay campos vacíos!', 2000, 'error')
			}
	}


	//REGISTRAR LOGROS
	$scope.nuevoLogro = function(){
		var idlogro 		= $scope.registrarLogroCodigo,
			nombre 			= $scope.registrarLogroNombre,
			periodo			= $scope.registrarLogroPeriodo,
			grado 			= $scope.registrarLogroGrado,
			idasignatura	= $scope.registrarLogroAsignatura


			if (idlogro && nombre && periodo && grado && idasignatura){
				reqAjax = $http.post('/nuevoLogro',{
					idlogro			: idlogro, 	
					nombre			: nombre,
					periodo 		: periodo,
					grado 			: grado,
					idasignatura	: idasignatura
				})
				.success(function(respuesta){
					if (respuesta.nuevoLogro){
						Materialize.toast('¡Logro Registrado :)!', 2000, 'success')
						$scope.limpiarRegistrarLogros()
					}
					if (respuesta.existe){
						Materialize.toast('¡El logro ya existe!', 2000, 'error')
					}
				})
				.error(function(err){

				})
			} else {
				Materialize.toast('¡Hay campos vacíos!', 2000, 'error')
			}
	}

	//REGISTRAR PLAN ACADEMICO

	$scope.nuevoPlanAcademico = function(){
		if ( $scope.grados && $scope.asignaturas ){
			reqAjax = $http.post('/registrarPlanAcademico', { grados: $scope.grados, asignaturas: $scope.asignaturas })
			reqAjax.success(function(respuesta){
				if (respuesta.nuevoPlanAcademico){
					Materialize.toast('¡Plan académico Registrado!', 2000, 'success')
					//$scope.cargarSalones()
					$scope.limpiarRegistrarPlanAcademico()
				} else {
					Materialize.toast('¡El plan academico '+$scope.grados+'-'+$scope.asignaturas+' ya existe!', 3000, 'error')
				}
			})
			reqAjax.error(function(error){
				alert('problema de red')
			})
		} else {
			Materialize.toast('¡Debe seleccionar el grado y la asignatura!', 3000, 'error')
		}
	}

-->//Todas las opciones para registrar//<--

-->//Todas las opciones para EDITAR//<--

	//EDITAR USUARIOS
	$scope.editarUsuario = function(){
		// si ya se ha consultado el usuario
		if ( $scope.usuarioEncontrado ){
			$scope.usuarioEncontrado.nombre1 	= $scope.editarUsuarioNombre1 	
			$scope.usuarioEncontrado.nombre2 	= $scope.editarUsuarioNombre2 	
			$scope.usuarioEncontrado.apellido1 	= $scope.editarUsuarioApellido1 	
			$scope.usuarioEncontrado.apellido2 	= $scope.editarUsuarioApellido2 	
			$scope.usuarioEncontrado.cedula 	= $scope.editarUsuarioCedula 		
			$scope.usuarioEncontrado.sexo 		= $scope.editarUsuarioSexo 		
			$scope.usuarioEncontrado.direccion  = $scope.editarUsuarioDireccion 	
			$scope.usuarioEncontrado.email 		= $scope.editarUsuarioCorreo		
			$scope.usuarioEncontrado.password 	= $scope.editarUsuarioContrasena 	
			$scope.usuarioEncontrado.telefono 	= $scope.editarUsuarioTelefono
			// enviamos el ajax	
			reqAjax = $http.post('/modificarUsuario', $scope.usuarioEncontrado)
			.success(function(respuesta){
				if ( respuesta.modifico ){
					Materialize.toast('¡Usuario Modificado!', 2000, 'success')
					$scope.limpiarEditarUsuario()
				} else {
					Materialize.toast('¡No ha modificado los campos!', 2000, 'error')
				}
			})
			.error(function(error){

			})
		} else {
			Materialize.toast('¡Debe buscar primero el usuario que desa modificar!', 3000, 'error')
		}
	}

	//EDITAR ESTUDIANTES	
	$scope.editarEstudiante = function(){
		// si ya se ha consultado el estudiante
		if ( $scope.estudianteEncontrado ){
			$scope.estudianteEncontrado.nombre1 			= $scope.editarEstudianteNombre1 	
			$scope.estudianteEncontrado.nombre2 			= $scope.editarEstudianteNombre2 	
			$scope.estudianteEncontrado.apellido1 			= $scope.editarEstudianteApellido1 	
			$scope.estudianteEncontrado.apellido2 			= $scope.editarEstudianteApellido2 	
			$scope.estudianteEncontrado.acudiente_cedula 	= $scope.editarEstudianteCedula 		
			$scope.estudianteEncontrado.sexo 				= $scope.editarEstudianteSexo 		
			$scope.estudianteEncontrado.direccion   		= $scope.editarEstudianteDireccion 	
			$scope.estudianteEncontrado.f_nacimiento		= $scope.editarEstudianteNacimiento	
			$scope.estudianteEncontrado.ti 					= $scope.editarEstudianteTi
			// enviamos el ajax	
			reqAjax = $http.post('/modificarEstudiante', $scope.estudianteEncontrado)
			.success(function(respuesta){
				if ( respuesta.modifico ){
					Materialize.toast('¡Estudiante Modificado!', 2000, 'success')
					$scope.limpiarEditarEstudiante()
				} else {
					Materialize.toast('¡No ha modificado los campos!', 2000, 'error')
				}
			})
			.error(function(error){

			})
		} else {
			Materialize.toast('¡Debe buscar primero el estudiante que desa modificar!', 2000, 'error')
		}
	}

	//EDITAR AREAS
	$scope.editarArea = function(){
		// si ya se ha consultado el área
		if ( $scope.areaEncontrada ){
			$scope.areaEncontrada.codigo 	= $scope.editarAreaCodigo 	
			$scope.areaEncontrada.nombre 	= $scope.editarAreaNombre 	
			// enviamos el ajax	
			reqAjax = $http.post('/modificarArea', $scope.areaEncontrada)
			.success(function(respuesta){
				if ( respuesta.modifico ){
					Materialize.toast('¡Área Modificada!', 2000, 'success')
				} else {
					Materialize.toast('¡No ha modificado los campos!', 2000, 'error')
				}
			})
			.error(function(error){

			})
		} else {
			Materialize.toast('¡Debe buscar primero el área  que desa modificar!', 2000, 'error')
		}
	}
-->//Todas las opciones para EDITAR//<--

-->//Todas las opciones para CONSULTAR//<--

	//BUSCAR USUARIOS
	$scope.buscarUsuario = function(){
		reqAjax = $http.post('/buscarUsuario', {
			buscador : $scope.editarUsuarioBuscar
		})
		.success(function(data){
			arregloRespuesta = data.usuario[0]
			$scope.usuarioEncontrado = arregloRespuesta
			if ( data.usuario.length !== 0 ){

				$('.editarUsuariolabel').addClass('active')

				if ( arregloRespuesta.sexo === 'M' ){
					$('#masculino').attr('selected', 'selected')
				}
				if ( arregloRespuesta.sexo === 'F' ){
					$('#femenino').attr('selected', 'selected')
				}

				Materialize.toast('¡Usuario encontrado!', 1000, 'success')
				$scope.editarUsuarioNombre1 	= arregloRespuesta.nombre1
				$scope.editarUsuarioNombre2 	= arregloRespuesta.nombre2
				$scope.editarUsuarioApellido1 	= arregloRespuesta.apellido1
				$scope.editarUsuarioApellido2 	= arregloRespuesta.apellido2
				$scope.editarUsuarioCedula 		= arregloRespuesta.cedula
				$scope.editarUsuarioSexo 		= arregloRespuesta.sexo
				$scope.editarUsuarioDireccion 	= arregloRespuesta.direccion
				$scope.editarUsuarioCorreo		= arregloRespuesta.email
				$scope.editarUsuarioContrasena 	= arregloRespuesta.password
				$scope.editarUsuarioTelefono 	= parseInt(arregloRespuesta.telefono, 10)
			} else {
				Materialize.toast('¡El usuario con cedula ['+$scope.editarUsuarioBuscar+'] No existe!', 3000, 'error')
			}

		})
		.error(function(error){
			Materialize.toast('ERROR DE RED!!', 2000, 'error')
		})
	}


	//BUSCAR ESTUDIANTES
	$scope.buscarEstudiante = function(){
		reqAjax = $http.post('/buscarEstudiante', {
			buscador : $scope.editarEstudianteBuscar
		})
		.success(function(data){
			arregloRespuesta = data.estudiante[0]
			$scope.estudianteEncontrado = arregloRespuesta
			if ( data.estudiante.length !== 0 ){

				$('.editarEstudiantelabel').addClass('active')

				if ( arregloRespuesta.sexo === 'M' ){
					$('#masculino').attr('selected', 'selected')
				}
				if ( arregloRespuesta.sexo === 'F' ){
					$('#femenino').attr('selected', 'selected')
				}
				$('#'+arregloRespuesta.grado).attr('selected','selected')

				Materialize.toast('¡Estudiante encontrado!', 1000, 'success')
				// $scope.editarEstudianteGrado		= arregloRespuesta.grado
				$scope.editarEstudianteNombre1 		= arregloRespuesta.nombre1
				$scope.editarEstudianteNombre2 		= arregloRespuesta.nombre2
				$scope.editarEstudianteApellido1 	= arregloRespuesta.apellido1
				$scope.editarEstudianteApellido2 	= arregloRespuesta.apellido2
				$scope.editarEstudianteCedula 		= arregloRespuesta.acudiente_cedula
				$scope.editarEstudianteSexo 		= arregloRespuesta.sexo
				$scope.editarEstudianteDireccion 	= arregloRespuesta.direccion
				$scope.editarEstudianteNacimiento	= new Date(arregloRespuesta.f_nacimiento)
				$scope.editarEstudianteTi			= parseInt(arregloRespuesta.ti, 10)
				
			} else {
				Materialize.toast('¡El estudiante con ti ['+$scope.editarEstudianteBuscar+'] No existe!', 3000, 'error')
			}

		})
		.error(function(error){
			Materialize.toast('ERROR DE RED!!', 2000, 'error')
		})
	}

	//BUSCAR SALONES
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

	$scope.cargarSalones = function(){
		reqAjax = $http.post('/cargarSalones')
		reqAjax.success(function(respuesta){
			$scope.salones = respuesta.salones
		})
		reqAjax.error(function(error){
			
		})
	}	
	//BUSCAR AREAS
	$scope.cargarAreas = function(){
		reqAjax = $http.post('/cargarAreas' )
		.success(function(respuesta){
			$scope.listaAreas = respuesta.area
		})
		.error(function (err){

		})
	}

	$scope.buscarArea = function(){
		reqAjax = $http.post('/buscarArea', {
			buscador : $scope.editarAreaBuscar
		})
		.success(function(data){
			arregloRespuesta = data.area[0]
			$scope.areaEncontrada = arregloRespuesta
			if ( data.area.length !== 0 ){

				$('.editarArealabel').addClass('active')

				Materialize.toast('¡Área encontrada!', 1000, 'success')
				$scope.editarAreaCodigo	 		= arregloRespuesta.codigo
				$scope.editarAreaNombre 		= arregloRespuesta.nombre
				
			} else {
				Materialize.toast('¡El área de código ['+$scope.editarAreaBuscar+'] No existe!', 2000, 'error')
			}
		})
		.error(function(error){
			Materialize.toast('ERROR DE RED!!', 2000, 'error')
		})
	}

	//BUSCAR ASIGNATURAS
	$scope.buscarAsignatura = function(){
		reqAjax = $http.post('/buscarAsignatura', {
			buscador : $scope.editarAsignaturaBuscar
		})
		.success(function(data){
			arregloRespuesta = data.asignatura[0]
			$scope.asignaturaEncontrada = arregloRespuesta
			if ( data.asignatura.length !== 0 ){

				$('.editarAsignaturalabel').addClass('active')

				$('#'+arregloRespuesta.codigo).attr('selected','selected')

				Materialize.toast('¡Asignatura encontrada!', 1000, 'success')
				
				$scope.editarAsignaturaNombre 		= arregloRespuesta.nombre
				$scope.editarAsignaturaCodigo 		= arregloRespuesta.idasignatura
				$scope.editarAsignaturaArea		 	= arregloRespuesta.area_codigo		
			} else {
				Materialize.toast('¡La asignatura de código ['+$scope.editarAsignaturaBuscar+'] No existe!', 3000, 'error')
			}
		})
		.error(function(error){
			Materialize.toast('ERROR DE RED!!', 2000, 'error')
		})
	}

	$scope.cargarAsignaturas = function(){
		reqAjax = $http.post('/cargarAsignaturas' )
		.success(function(respuesta){
			$scope.listaAsignaturas = respuesta.asignatura
		})
		.error(function (err){

		})
	}

	//BUSCAR LOGROS

	$scope.buscarLogro = function(){
		reqAjax = $http.post('/buscarLogro', {
			buscador : $scope.editarLogroBuscar
		})
		.success(function(data){
			arregloRespuesta = data.logro[0]
			$scope.logroEncontrado = arregloRespuesta
			if ( data.logro.length !== 0 ){

				$('.editarLogrolabel').addClass('active')

				$('#'+arregloRespuesta.periodo).attr('selected','selected')
				$('#'+arregloRespuesta.grado).attr('selected','selected')
				$('#'+arregloRespuesta.idasignatura).attr('selected','selected')

				Materialize.toast('¡Logro encontrado!', 1000, 'success')
				
				$scope.editarLogroCodigo	 		= arregloRespuesta.idlogro
				$scope.editarLogroNombre	 		= arregloRespuesta.nombre
				$scope.editarLogroPeriodo		 	= arregloRespuesta.periodo
				$scope.editarLogroAsignatura		= arregloRespuesta.idasignatura
				$scope.editarLogroGrado				= arregloRespuesta.grado		
			} else {
				Materialize.toast('¡El logro de código ['+$scope.editarLogroBuscar+'] NO EXISTE!!', 2000, 'success')
			}
		})
		.error(function(error){
			Materialize.toast('ERROR DE RED!!', 2000, 'error')
		})
	}

	//BUSCAR HORARIO
	$scope.buscarHorario = function(){
	reqAjax = $http.post('/buscarHorario', {
			buscador : $scope.editarHorarioBuscar
		})
		.success(function(data){
			arregloRespuesta = data.horario[0]
			$scope.horarioEncontrado = arregloRespuesta
			if ( data.horario.length !== 0 ){

				$('.editarHorariolabel').addClass('active')

				$('#'+arregloRespuesta.jornada).attr('selected','selected')
				$('#'+arregloRespuesta.dia).attr('selected','selected')
				$('#'+arregloRespuesta.grupo).attr('selected','selected')
				$('#'+arregloRespuesta.grado).attr('selected','selected')
				$('#'+arregloRespuesta.idasignatura).attr('selected','selected')

				Materialize.toast('¡Horario encontrado!', 1000, 'success')
				
				$scope.editarHorarioCodigo	 		= arregloRespuesta.idhorario
				$scope.editarHorarioJornada	 		= arregloRespuesta.jornada
				$scope.editarHorarioDia			 	= arregloRespuesta.dia
				$scope.editarHorarioHora			= arregloRespuesta.hora
				$scope.editarHorarioAsignatura		= arregloRespuesta.idasignatura
				$scope.editarHorarioGrado			= arregloRespuesta.grado
				$scope.editarHorarioGrupo 			= arregloRespuesta.grupo
				$scope.editarHorarioDocente			= arregloRespuesta.docente_cedula
			} else {
				Materialize.toast('¡El Horario de código ['+$scope.editarHorarioBuscar+'] NO EXISTE!!', 2000, 'success')
			}
		})
		.error(function(error){
			Materialize.toast('ERROR DE RED!!', 2000, 'error')
		})
	}
-->//Todas las funciones para CONSULTAR//<--

-->//Todas las funciones para ELIMINAR//<--

	//ELIMINAR SALON	
	$scope.eliminarSalon = function(grado, grupo){
		reqAjax = $http.post('/eliminarSalon', { grado: grado, grupo: grupo })
		$scope.salones.forEach( function(salon) {
			if ( salon.grado_idgrado === grado && salon.grupo_idgrupo === grupo ){
				arraySalones   = _.without($scope.salones, salon)
				$('.tooltipped').tooltip('remove')
				$('.tooltipped').tooltip({delay: 50});
				$scope.salones =  null
				$scope.salones =  arraySalones
			}
		})
		reqAjax.success(function(respuesta){
			if (respuesta.eliminado){
				Materialize.toast('¡Salón ['+grado+'-'+grupo+'] Eliminado!',2000,'success')
			}
		})
		reqAjax.error(function(error){
			
		})
	}

-->//Todas las funciones para activar ELIMINAR//<--		

-->//Todas las funciones para activar modales//<--	

	//Modales ESTUDIANTE
	$scope.inicio = function(){
		$('#modal-agregar-estudiante').openModal()
	}
	$scope.mostrarEditarEstudiante = function(){
		$('#modal-editar-estudiante').openModal({
			ready: function(){
				$('editar-estudiante-grado option').removeAttr('selected', 'selected')
				$('#grado-default-editar-estudiante').removeAttr('selected')
			},
			complete: function(){
				$('.editarEstudiantelabel').removeClass('active')
				$scope.limpiarEditarEstudiante()
				$('#grado-default-editar-estudiante').attr('selected', 'selected')
			}

		})
		$('select').material_select();
	}

	//Modales USUARIO
	$scope.mostrarAgregarUsuario = function(){
		$('#modal-agregar-usuario').openModal()
		$('select').material_select();
	}
	$scope.mostrarEditarUsuario = function(){
		$('#modal-editar-usuario').openModal({
			complete: function(){
				$('.editarUsuariolabel').removeClass('active')
			}
		})
		$('select').material_select();
	}
	$scope.mostrarEliminarUsuario = function(){
		$('#modal-eliminar-usuario').openModal()
	}

	//Modales Grados,grupos y salones
	$scope.mostrarModalAgregarGrado = function(){
		$('#modal-agregar-grado').openModal()
		$scope.registrarGrado = ''
	}
	$scope.mostrarModalAgregarGrupo = function(){
		$('#modal-agregar-grupo').openModal()
		$scope.registrarGrupo = ''
	}
	$scope.mostrarModalEliminarSalon = function(){
		$('#modal-eliminar-salon').openModal()
	}
	$scope.mostrarModalAgregarSalon = function(){
		$('#modal-agregar-salon').openModal({
			ready: function(){
				$('#grado-default').removeAttr('selected')
				$('#grupo-default').removeAttr('selected')
			},
			complete: function(){
				$('#grado-default').attr('selected', 'selected')
				$('#grupo-default').attr('selected', 'selected')
				$scope.grados = null
				$scope.grupos = null
			}
		})
	}

	//Modales Áreas y Asignaturas
	$scope.mostrarModalAgregarArea = function(){
		$('#modal-agregar-area').openModal()
		$scope.registrarArea = ''
	}
	$scope.mostrarModalEditarArea = function(){
		$('#modal-editar-area').openModal({
			
			complete: function(){
				$('.editarArealabel').removeClass('active')
			}
		})
	}
	$scope.mostrarModalAgregarAsignatura = function(){
		$('#modal-agregar-asignatura').openModal({})
		$scope.registrarAsignatura = ''
	}
	$scope.mostrarModalEditarAsignatura = function(){
		$('#modal-editar-asignatura').openModal({
			
			complete: function(){
				$('.editarAsignaturalabel').removeClass('active')
			}
		})
	}
	$scope.mostrarModalPlanAcademico = function(){
		$('#modal-agregar-PlanAcademico').openModal({})
		
	}
	$scope.mostrarModalCargaAcademica = function(){
		$('#modal-agregar-CargaAcademica').openModal({})
	}

	//Modales logros
	$scope.mostrarAgregarLogro = function(){
		$('#modal-agregar-logro').openModal()
	}

	$scope.mostrarEditarLogro = function(){
		$('#modal-editar-logro').openModal({
			
			complete: function(){
				$('.editarLogrolabel').removeClass('active')
			}
		})
	}
	$scope.mostrarAgregarHorario = function(){
		$('#modal-agregar-horario').openModal()
	}
	$scope.mostrarEditarHorario = function(){
		$('#modal-editar-horario').openModal({

			complete: function(){
				$('.editarHorariolabel').removeClass('active')
			}
		})
	
	}

})
-->//Todas las funciones para activar modales//<--	