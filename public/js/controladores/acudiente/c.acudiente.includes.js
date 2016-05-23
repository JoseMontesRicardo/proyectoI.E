appAcudiente = angular.module('acudienteApp',[
	'ngRoute',
	'acudienteControlador'])

appAcudiente.config(function($routeProvider){
	$routeProvider.when('/asignaturas', {
		templateUrl: 'template/asignaturas.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/opciones-asignaturas', {
		templateUrl: 'template/opciones-asignaturas.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/logros', {
		templateUrl: 'template/logros.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/horario', {
		templateUrl: 'template/horarios.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/hijos', {
		templateUrl: 'template/acudiente/opciones/opciones-estudiante.html'
	}).otherwise({
		redirectTo: '/'
	})
	$routeProvider.when('/docentes', {
		templateUrl: 'template/docentes.html'
	}).otherwise({
		redirectTo: '/'
	})
})
