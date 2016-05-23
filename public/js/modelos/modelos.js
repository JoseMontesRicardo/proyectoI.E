var modelos = angular.module('modelos', [])
 
modelos.service("modelos", function()
{
	var nombre1,
        nombre2,
        apellido1,
        apellido2,
        fecha,
        direccion,
        sexo,
        cedulaPadre,
        ti,
        tiBuscar,
        nombre1Buscar,
        nombre2Buscar,
        apellido1Buscar,
        apellido2Buscar,
        fechaBuscar,
        direccionBuscar,
        sexoBuscar,
        cedulaPadreBuscar,
        grado

	return {
            getGrado: function() {
                return grado
            }, setGrado: function(value){
                grado = value
            }
            getNombre1: function () {
                return nombre1
            }, setNombre1: function(value) {
                nombre1 = value
            },
			getNombre2: function () {
                return nombre2
            }, setNombre2: function(value) {
                nombre2 = value
            },
            getApellido1: function () {
                return apellido1
            }, setApellido1: function(value) {
                apellido1 = value
            },
            getApellido2: function () {
                return apellido2
            }, setApellido2: function(value) {
                apellido2 = value
            },
            getFecha: function () {
                return fecha
            },setFecha: function(value){
            	fecha = value
            },
            getDireccion: function(){
            	return direccion
            }, setDireccion: function(value){
            	direccion = value
            }, 
            getSexo: function(){
            	return sexo
            }, setSexo: function(value){
            	sexo = value
            },
            getCedulaPadre: function(){
            	return cedulaPadre
            }, setCedulaPadre: function(value){
            	cedulaPadre = value
            },
            getTi: function(){
                return ti
            }, setTi: function(value){
                ti = value
            },
            getTiBuscar: function(){
                return tiBuscar
            }, setTiBuscar: function(value){
                tiBuscar = value
            },
            getNombre1Buscar: function () {
                return nombre1Buscar
            }, setNombre1Buscar: function(value) {
                nombre1Buscar = value
            },
            getNombre2Buscar: function () {
                return nombre2Buscar
            }, setNombre2Buscar: function(value) {
                nombre2Buscar = value
            },
            getApellido1Buscar: function () {
                return apellido1Buscar
            }, setApellido1Buscar: function(value) {
                apellido1Buscar = value
            },
            getApellido2Buscar: function () {
                return apellido2Buscar
            }, setApellido2Buscar: function(value) {
                apellido2Buscar = value
            },
            getFechaBuscar: function () {
                return fechaBuscar
            },setFechaBuscar: function(value){
                fecha = value
            },
            getDireccionBuscar: function(){
                return direccionBuscar
            }, setDireccionBuscar: function(value){
                direccionBuscar = value
            }, 
            getSexoBuscar: function(){
                return sexoBuscar
            }, setSexoBuscar: function(value){
                sexoBuscarBuscar = value
            },
            getCedulaPadreBuscar: function(){
                return cedulaPadreBuscar
            }, setCedulaPadreBuscar: function(value){
                cedulaPadreBuscar = value
            }
        }	
})