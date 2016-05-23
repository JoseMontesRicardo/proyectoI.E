appAdmin = angular.module('adminApp',[
	'ngRoute',
	'controladorContenedorPrincipal'
	])

appAdmin.config(function($routeProvider){
	$routeProvider.when('/usuarios', {
		templateUrl: 'template/administrador/opciones/opciones-usuarios.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/estudiantes', {
		templateUrl: 'template/administrador/opciones/opciones-estudiante.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/asignaturas', {
		templateUrl: 'template/administrador/opciones/opciones-asignatura-area.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/grados', {
		templateUrl: 'template/administrador/opciones/opciones-grado-grupo.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/logros', {
		templateUrl: 'template/administrador/opciones/opciones-logros.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/horarios', {
		templateUrl: 'template/administrador/opciones/opciones-horarios.html'
	}).otherwise({
		redirectTo: '/'
	})
})

