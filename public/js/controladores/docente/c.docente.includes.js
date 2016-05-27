appDocente = angular.module('docenteApp',[
	'ngRoute',
	'moduleDocente'
	])

appDocente.config(function($routeProvider){
	$routeProvider.when('/usuarios', {
		templateUrl: 'template/administrador/opciones/opciones-usuarios.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/contrasena', {
		templateUrl: 'template/docentes/cambiarContrasena.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/cargas', {
		templateUrl: 'template/cargar-asignaturas.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/alumnos/:asignatura/:codigoAsignatura/:grado/:grupo', {
		templateUrl: 'template/calificar-alumnos.html'
	}).otherwise({
		redirectTo: '/',
		controller: 'controladorSalones'
	})
	$routeProvider.when('/horario', {
		templateUrl: 'template/docentes/horario.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/informacion', {
		templateUrl: 'template/docentes/informacion.html'
	}).otherwise({
		redirectTo: '/'
	})
})